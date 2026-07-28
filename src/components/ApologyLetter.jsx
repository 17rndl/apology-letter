import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import './ApologyLetter.css';
import { letter, fill, warnOnUnfilledSlots } from '../letterConfig';

const EASE = [0.22, 1, 0.36, 1];

const ApologyLetter = ({ onClose }) => {
  const reduced = useReducedMotion();
  // reduced motion skips straight to the letter — the ceremony is never the point
  const [step, setStep] = useState(reduced ? 3 : 0);

  useEffect(() => {
    warnOnUnfilledSlots();
  }, []);

  useEffect(() => {
    if (reduced) return undefined;
    const timers = [
      setTimeout(() => setStep(1), 600),
      setTimeout(() => setStep(2), 1200),
      setTimeout(() => setStep(3), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const opened = step >= 3;

  const body = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.24, delayChildren: reduced ? 0 : 0.35 } },
  };

  const line = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: reduced ? 0.3 : 0.8, ease: EASE } },
  };

  const signatureAt = 0.35 + (letter.paragraphs.length + 1) * 0.24;

  return (
    <motion.div
      className="apology-overlay-container"
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="envelope"
            className="envelope-interaction-wrapper"
            exit={{ y: 260, opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          >
            <motion.div
              className="env-back"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            {/* the folded sheet, still inside the pocket */}
            <motion.div
              className="env-letter"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: step >= 2 ? -180 : 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            <motion.div
              className="env-front"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <div className="env-seal-broken" />
            </motion.div>

            <motion.div
              className="env-flap"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotateX: step >= 1 ? 180 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top center' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {opened && (
          <motion.article
            key="letter"
            className="letter-card"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.88, y: 28 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduced ? 0.5 : 0.95, ease: EASE }}
          >
            <p className="letter-eyebrow">{letter.eyebrow}</p>

            <motion.div className="letter-body" variants={body} initial="hidden" animate="show">
              {letter.paragraphs.map((text, i) => (
                <motion.p key={i} className={i === 0 ? 'lead' : undefined} variants={line}>
                  {text}
                </motion.p>
              ))}

              <motion.div className="letter-signoff" variants={line}>
                <span className="signoff-line">{letter.signoff}</span>
                {/* name and flourish share one column, so the underline spans the
                    signature exactly at any font size or viewport width */}
                <span className="signature-block">
                  <span className="signature">{fill(letter.signature)}</span>
                  <svg
                    className="flourish"
                    viewBox="0 0 220 22"
                    fill="none"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M4 15C34 6 62 4 92 9c22 4 36 10 58 9 24-1 42-7 66-14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: reduced ? 0.4 : 1.8,
                        delay: reduced ? 0.2 : signatureAt,
                        ease: 'easeInOut',
                      }}
                    />
                  </svg>
                </span>
              </motion.div>
            </motion.div>
          </motion.article>
        )}
      </AnimatePresence>

      <motion.button
        className="close-button"
        onClick={onClose}
        aria-label="Close the letter"
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        style={{ pointerEvents: opened ? 'auto' : 'none' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={24} color="#5e546b" />
      </motion.button>
    </motion.div>
  );
};

export default ApologyLetter;
