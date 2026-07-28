import confetti from 'canvas-confetti';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Amber points drifting up from the bottom edge — the opposite of a party cannon.
 * Negative gravity is off-label for canvas-confetti; if a browser ever fights it,
 * the particles simply fall instead, which still reads as quiet.
 */
export const fireflyRise = () => {
  if (prefersReducedMotion()) return;

  const emit = (originX) =>
    confetti({
      particleCount: 20,
      shapes: ['circle'],
      colors: ['#ffd9a0', '#ffb765', '#ffe9b3'],
      scalar: 0.6,
      startVelocity: 12,
      spread: 70,
      gravity: -0.25,
      drift: 0.5,
      ticks: 500,
      zIndex: 100,
      origin: { x: originX, y: 1.1 },
    });

  emit(0.3);
  emit(0.7);
  setTimeout(() => {
    emit(0.5);
  }, 900);
};
