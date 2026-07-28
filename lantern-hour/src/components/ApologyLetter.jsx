import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './ApologyLetter.css';
import { letter, microCopy, fill, segments } from '../letterConfig';
import AckButton from './AckButton';

const EASE = [0.22, 1, 0.36, 1];

const Line = ({ text }) =>
  segments(text).map((part, i) =>
    part.type === 'slot' ? (
      <span className="slot" key={`${part.key}-${i}`}>
        {part.content}
      </span>
    ) : (
      <React.Fragment key={`t-${i}`}>{part.content}</React.Fragment>
    ),
  );

const ApologyLetter = ({ revealed, paced = true, onReplay, onRest }) => {
  const reduced = useReducedMotion();
  const [skipped, setSkipped] = useState(false);
  const [paceDone, setPaceDone] = useState(false);

  const instant = reduced || skipped || !paced;
  const stagger = instant ? 0 : 0.28;
  const lead = instant ? 0 : 0.45;
  const signoffAt = lead + (letter.paragraphs.length + 1) * stagger;

  // once every paragraph has surfaced there is nothing left to skip
  useEffect(() => {
    if (!revealed || instant) return undefined;
    const timer = setTimeout(() => setPaceDone(true), (signoffAt + 1) * 1000);
    return () => clearTimeout(timer);
  }, [revealed, instant, signoffAt]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: lead } },
  };

  const item = {
    hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: instant ? 0.35 : 0.9, ease: EASE },
    },
  };

  return (
    <motion.article
      className="letter"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={
        revealed
          ? reduced
            ? { opacity: 1 }
            : { opacity: 1, y: 0, filter: 'blur(0px)' }
          : undefined
      }
      transition={{ duration: reduced ? 0.6 : 1.4, ease: EASE }}
    >
      <div className="letter-paper">
        <div className="letter-head">
          <h1 className="letter-title">{letter.title}</h1>
          <AnimatePresence>
            {revealed && !instant && !paceDone && (
              <motion.button
                type="button"
                className="skip-link"
                onClick={() => setSkipped(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {microCopy.skipPacing}
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="letter-body"
          variants={container}
          initial="hidden"
          animate={revealed ? 'show' : 'hidden'}
        >
          {letter.paragraphs.map((text, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <motion.div className="interpunct" variants={item} aria-hidden="true">
                  ·
                </motion.div>
              )}
              <motion.p className={i === 0 ? 'lead' : undefined} variants={item}>
                <Line text={text} />
              </motion.p>
            </React.Fragment>
          ))}

          <motion.div className="letter-signoff" variants={item}>
            <span className="signoff-line">{letter.signoff}</span>
            {/* name and flourish share one column so the underline always spans the
                signature exactly, at any font size or viewport width */}
            <span className="signature-block">
              <span className="signature">
                <Line text={letter.signature} />
              </span>
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={revealed ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{
                    duration: instant ? 0.5 : 2.2,
                    delay: instant ? 0.2 : signoffAt + 0.4,
                    ease: 'easeInOut',
                  }}
                />
              </svg>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {revealed && (
        <motion.footer
          className="letter-after"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: instant ? 0.3 : signoffAt + 1.2, duration: 0.8 }}
        >
          <p className="post-reveal">{microCopy.postReveal}</p>
          <p className="no-pressure">{fill(microCopy.noPressure)}</p>

          <AckButton appearAfter={instant ? 1500 : 8000} />

          <div className="letter-actions">
            <button type="button" className="ghost-btn" onClick={onReplay}>
              Read it again
            </button>
            <button type="button" className="ghost-btn" onClick={onRest}>
              Close for now
            </button>
          </div>
        </motion.footer>
      )}
    </motion.article>
  );
};

export default ApologyLetter;
