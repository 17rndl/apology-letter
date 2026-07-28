import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STAR_COUNT = 40;

const buildStarShadow = (count, seed) => {
  let value = seed;
  const next = () => {
    value = (value * 1103515245 + 12345) % 2147483648;
    return value / 2147483648;
  };
  return Array.from({ length: count }, () => {
    const x = (next() * 100).toFixed(2);
    const y = (next() * 70).toFixed(2);
    const alpha = (0.45 + next() * 0.45).toFixed(2);
    return `${x}vw ${y}vh 0 0 rgba(255,255,255,${alpha})`;
  }).join(', ');
};

/**
 * Fireflies live only in the outer margins so they frame the letter and never
 * drift across the text.
 */
const buildFireflies = (count) => {
  let value = 20260729;
  const next = () => {
    value = (value * 1103515245 + 12345) % 2147483648;
    return value / 2147483648;
  };
  return Array.from({ length: count }, (_, i) => {
    const onLeft = i % 2 === 0;
    const left = onLeft ? next() * 18 : 82 + next() * 18;
    const top = 8 + next() * 84;
    const waypoints = Array.from({ length: 3 }, () => ({
      x: (next() - 0.5) * 90,
      y: (next() - 0.5) * 140,
    }));
    return {
      id: i,
      left,
      top,
      duration: 14 + next() * 12,
      delay: next() * 8,
      x: [0, ...waypoints.map((w) => w.x), 0],
      y: [0, ...waypoints.map((w) => w.y), 0],
    };
  });
};

const useIsNarrow = () => {
  const [narrow, setNarrow] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches,
  );
  useEffect(() => {
    const query = window.matchMedia('(max-width: 639px)');
    const update = () => setNarrow(query.matches);
    query.addEventListener('change', update);
    update();
    return () => query.removeEventListener('change', update);
  }, []);
  return narrow;
};

const Ambience = () => {
  const reduced = useReducedMotion();
  const narrow = useIsNarrow();

  const starsA = useMemo(() => buildStarShadow(STAR_COUNT, 7717), []);
  const starsB = useMemo(() => buildStarShadow(STAR_COUNT, 90210), []);

  const fireflies = useMemo(() => {
    if (reduced) return buildFireflies(5);
    return buildFireflies(narrow ? 8 : 12);
  }, [reduced, narrow]);

  return (
    <div className="sky" aria-hidden="true">
      <div className="sky-gradient" />

      <div className="stars">
        <span className="layer-a" style={{ boxShadow: starsA }} />
        <span className="layer-b" style={{ boxShadow: starsB }} />
      </div>

      {fireflies.map((fly) =>
        reduced ? (
          <span
            key={fly.id}
            className="firefly"
            style={{ left: `${fly.left}%`, top: `${fly.top}%`, opacity: 0.4 }}
          />
        ) : (
          <motion.span
            key={fly.id}
            className="firefly"
            style={{ left: `${fly.left}%`, top: `${fly.top}%` }}
            initial={{ opacity: 0 }}
            animate={{ x: fly.x, y: fly.y, opacity: [0, 1, 0.35, 1, 0] }}
            transition={{
              duration: fly.duration,
              delay: fly.delay,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        ),
      )}

      <div className="grain" />
    </div>
  );
};

export default Ambience;
