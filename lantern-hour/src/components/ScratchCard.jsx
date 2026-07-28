import React, { useRef, useEffect, useState, useCallback } from 'react';
import './ScratchCard.css';
import { microCopy, fill } from '../letterConfig';

const GRAIN_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

const REVEAL_AT = 50;
const BRUSH_RADIUS = 48;

const loadGrain = () =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = GRAIN_SRC;
  });

/**
 * Condensation on cold glass. The letter is already lit underneath — a warm glow
 * leaks through the fog before anything is touched, so the reader knows what is waiting.
 */
const ScratchCard = ({ children, active = true, onReveal, onProgress }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const grainRef = useRef(null);
  const lastPoint = useRef(null);
  const paintedSize = useRef({ w: 0, h: 0 });
  const touched = useRef(false);
  const rafPending = useRef(false);
  const revealedRef = useRef(false);
  const drawing = useRef(false);

  const [isRevealed, setIsRevealed] = useState(false);
  const [pct, setPct] = useState(0);

  const paint = useCallback(async () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const sameSize =
      Math.abs(rect.width - paintedSize.current.w) < 1 &&
      Math.abs(rect.height - paintedSize.current.h) < 1;
    if (sameSize) return;
    // Repainting would erase whatever they have already wiped clear.
    if (touched.current) return;

    paintedSize.current = { w: rect.width, h: rect.height };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, rect.width, rect.height);

    const fog = ctx.createLinearGradient(0, 0, 0, rect.height);
    fog.addColorStop(0, 'rgba(26, 33, 80, 0.97)');
    fog.addColorStop(1, 'rgba(42, 43, 94, 0.96)');
    ctx.fillStyle = fog;
    ctx.fillRect(0, 0, rect.width, rect.height);

    if (!grainRef.current) grainRef.current = await loadGrain();
    if (grainRef.current) {
      ctx.save();
      ctx.globalAlpha = 0.25;
      const pattern = ctx.createPattern(grainRef.current, 'repeat');
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, rect.width, rect.height);
      }
      ctx.restore();
    }

    // the lantern, still burning behind the fog
    const leak = ctx.createRadialGradient(
      rect.width / 2,
      rect.height / 2,
      0,
      rect.width / 2,
      rect.height / 2,
      Math.max(rect.width, rect.height) * 0.6,
    );
    leak.addColorStop(0, 'rgba(255, 183, 101, 0.16)');
    leak.addColorStop(1, 'rgba(255, 183, 101, 0)');
    ctx.fillStyle = leak;
    ctx.fillRect(0, 0, rect.width, rect.height);

    await document.fonts?.ready;

    ctx.textAlign = 'center';
    ctx.fillStyle = '#cfd3ee';
    ctx.font = `italic 500 ${Math.min(34, rect.width / 11)}px "Cormorant Garamond", Georgia, serif`;
    ctx.fillText(microCopy.cover.action, rect.width / 2, rect.height / 2 - 4);

    ctx.fillStyle = 'rgba(154, 160, 199, 0.85)';
    if ('letterSpacing' in ctx) ctx.letterSpacing = '2px';
    ctx.font = '400 12px "Inter", system-ui, sans-serif';
    ctx.fillText(microCopy.cover.sub.toUpperCase(), rect.width / 2, rect.height / 2 + 26);
    if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
  }, []);

  // A ResizeObserver rather than a mount-time measurement: the container is still
  // growing while webfonts land, and a single early paint lands on a zero-height box.
  useEffect(() => {
    const container = containerRef.current;
    if (!active || !container) return undefined;

    paint();
    const observer = new ResizeObserver(() => paint());
    observer.observe(container);
    return () => observer.disconnect();
  }, [active, paint]);

  const evaluate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealedRef.current) return;

    const ctx = canvas.getContext('2d');
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clear = 0;
    let total = 0;
    // every 40th pixel is plenty for a percentage and keeps the wipe at 60fps
    for (let i = 3; i < data.length; i += 4 * 40) {
      if (data[i] < 10) clear++;
      total++;
    }

    const cleared = total ? (clear / total) * 100 : 0;
    setPct(cleared);
    onProgress?.(Math.min(100, cleared));

    if (cleared > REVEAL_AT) {
      revealedRef.current = true;
      setIsRevealed(true);
      setPct(100);
      onProgress?.(100);
      onReveal?.();
    }
  }, [onProgress, onReveal]);

  // getImageData is expensive, so during a wipe it runs at most once a frame.
  const measure = useCallback(() => {
    if (rafPending.current) return;
    rafPending.current = true;
    requestAnimationFrame(() => {
      rafPending.current = false;
      evaluate();
    });
  }, [evaluate]);

  const pointFrom = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const source = e.touches ? e.touches[0] : e;
    return { x: source.clientX - rect.left, y: source.clientY - rect.top };
  };

  const stamp = (ctx, x, y) => {
    const brush = ctx.createRadialGradient(x, y, 0, x, y, BRUSH_RADIUS);
    brush.addColorStop(0, 'rgba(0,0,0,1)');
    brush.addColorStop(0.55, 'rgba(0,0,0,0.92)');
    brush.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = brush;
    ctx.fillRect(x - BRUSH_RADIUS, y - BRUSH_RADIUS, BRUSH_RADIUS * 2, BRUSH_RADIUS * 2);
  };

  const wipe = (e) => {
    if (!drawing.current || revealedRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const point = pointFrom(e);
    touched.current = true;
    ctx.globalCompositeOperation = 'destination-out';

    const previous = lastPoint.current;
    if (previous) {
      // fill the gap a fast drag would otherwise leave between frames
      const distance = Math.hypot(point.x - previous.x, point.y - previous.y);
      const steps = Math.ceil(distance / (BRUSH_RADIUS / 3));
      for (let i = 1; i <= steps; i++) {
        stamp(
          ctx,
          previous.x + ((point.x - previous.x) * i) / steps,
          previous.y + ((point.y - previous.y) * i) / steps,
        );
      }
    } else {
      stamp(ctx, point.x, point.y);
    }

    lastPoint.current = point;
    measure();
  };

  const handleStart = (e) => {
    drawing.current = true;
    lastPoint.current = null;
    wipe(e);
  };

  const handleEnd = () => {
    if (!drawing.current) return;
    drawing.current = false;
    lastPoint.current = null;
    // frame callbacks stall in a backgrounded tab; settle the count on release
    evaluate();
  };

  // the lantern behind the glass warms as the fog thins under their hand
  const halo = active && !isRevealed ? Math.min(1, pct / REVEAL_AT) : 1;

  if (!active) {
    return (
      <div className="scratch-card-container" ref={containerRef} style={{ '--halo-strength': 1 }}>
        <div className="scratch-content">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`scratch-card-container ${isRevealed ? '' : 'is-covered'}`}
      ref={containerRef}
      style={{ '--halo-strength': halo }}
    >
      <div className="scratch-content">{children}</div>
      <canvas
        ref={canvasRef}
        className={`scratch-canvas ${isRevealed ? 'revealed' : ''}`}
        aria-label={fill(microCopy.cover.line)}
        onMouseDown={handleStart}
        onMouseMove={wipe}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={wipe}
        onTouchEnd={handleEnd}
      />
    </div>
  );
};

export default ScratchCard;
