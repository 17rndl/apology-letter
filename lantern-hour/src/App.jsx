import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Ambience from './components/Ambience';
import ScratchCard from './components/ScratchCard';
import ApologyLetter from './components/ApologyLetter';
import { fireflyRise } from './components/Confetti';
import { microCopy, fill, warnOnUnfilledSlots } from './letterConfig';
import './App.css';

const READ_KEY = 'apology_revealed';

const readBefore = () => {
  try {
    return localStorage.getItem(READ_KEY) === '1';
  } catch {
    return false;
  }
};

function App() {
  const [returning] = useState(readBefore);
  const [revealed, setRevealed] = useState(returning);
  const [ceremony, setCeremony] = useState(!returning);
  const [paced, setPaced] = useState(!returning);
  const [resting, setResting] = useState(false);
  const [cardKey, setCardKey] = useState(0);

  useEffect(() => {
    warnOnUnfilledSlots();
  }, []);

  const handleReveal = useCallback(() => {
    setRevealed(true);
    try {
      localStorage.setItem(READ_KEY, '1');
    } catch {
      /* private mode — the ceremony simply plays again next time */
    }
    fireflyRise();
  }, []);

  const handleReplay = useCallback(() => {
    setRevealed(false);
    setCeremony(true);
    setPaced(true);
    setResting(false);
    setCardKey((key) => key + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`app ${resting ? 'is-resting' : ''}`}>
      <Ambience />

      <main className="stage">
        <header className="stage-head">
          <p className="eyebrow">{fill(microCopy.cover.eyebrow)}</p>
          <AnimatePresence>
            {!revealed && (
              <motion.p
                className="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
              >
                {microCopy.cover.line}
              </motion.p>
            )}
          </AnimatePresence>
        </header>

        {/* `active` deliberately ignores `revealed` — the card keeps the spent canvas
            mounted so the fog can fade out instead of blinking away. */}
        <ScratchCard key={cardKey} active={ceremony} onReveal={handleReveal}>
          <ApologyLetter
            revealed={revealed}
            paced={paced}
            onReplay={handleReplay}
            onRest={() => setResting(true)}
          />
        </ScratchCard>

        {revealed && (
          <p className="rest-invite">
            {microCopy.goodnight.lead}{' '}
            <button type="button" className="ghost-btn" onClick={() => setResting(true)}>
              {microCopy.goodnight.button}
            </button>
          </p>
        )}
      </main>

      <AnimatePresence>
        {resting && (
          <motion.div
            className="resting-veil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="resting-line">{fill(microCopy.goodnight.resting)}</p>
            <button type="button" className="ghost-btn" onClick={() => setResting(false)}>
              {microCopy.goodnight.undo}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
