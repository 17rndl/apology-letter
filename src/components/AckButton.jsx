import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { microCopy } from '../letterConfig';

const STORAGE_KEY = 'apology_ack';

/**
 * A way to acknowledge without composing a reply. It states a fact in the past tense,
 * it never leads anywhere, and it tells nobody — nothing here is sent or recorded
 * beyond this browser.
 */
const AckButton = ({ appearAfter = 8000 }) => {
  const [acked, setAcked] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), appearAfter);
    return () => clearTimeout(timer);
  }, [appearAfter]);

  const acknowledge = () => {
    setAcked(true);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* private mode — the acknowledgement just does not persist */
    }
  };

  if (!visible && !acked) return null;

  return (
    <div className="ack-slot">
      <AnimatePresence mode="wait" initial={false}>
        {acked ? (
          <motion.p
            key="done"
            layout
            className="ack-done"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {microCopy.ack.after}
          </motion.p>
        ) : (
          <motion.button
            key="button"
            layout
            type="button"
            className="ack-btn"
            onClick={acknowledge}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            {microCopy.ack.button}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AckButton;
