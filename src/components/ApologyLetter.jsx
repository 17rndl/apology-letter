import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './ApologyLetter.css';

const ApologyLetter = ({ onClose }) => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    // Sequence the animation automatically
    const timer1 = setTimeout(() => setStep(1), 600);
    const timer2 = setTimeout(() => setStep(2), 1200);
    const timer3 = setTimeout(() => setStep(3), 2000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <motion.div 
      className="apology-overlay-container"
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
    >
      <div className="envelope-interaction-wrapper">
        
        {/* ENVELOPE BACK (POCKET) */}
        <motion.div 
          className="env-back"
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ 
            y: step >= 3 ? 400 : 0, 
            opacity: step >= 3 ? 0 : 1,
            scale: 1
          }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* THE LETTER (Slides out from INSIDE the pocket) */}
        <motion.div 
          className="env-letter"
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1,
            y: step >= 3 ? 0 : (step >= 2 ? -180 : 0), // Slide up out of envelope, then center
            scale: step >= 3 ? 1.5 : 1, // Expand readable size
            zIndex: step >= 3 ? 10 : 1
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Reveal Content only on step 3 */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div 
                className="letter-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <p>It's fine, I understand.</p>
                <p>I was wrong. I feel really bad about it now.</p>
                <p>I should've been the bigger person.</p>
                <p>No more excuses.</p>
                <p>I own up to it.</p>
                <p className="closing">- Me</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ENVELOPE FRONT (COVERS LETTER) */}
        <motion.div 
          className="env-front"
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ 
            y: step >= 3 ? 400 : 0, 
            opacity: step >= 3 ? 0 : 1,
            scale: 1
          }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
           <div className="env-seal-broken"></div>
        </motion.div>

        {/* ENVELOPE TOP FLAP */}
        <motion.div 
          className="env-flap"
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ 
            y: step >= 3 ? 400 : 0,
            opacity: step >= 3 ? 0 : 1,
            rotateX: step >= 1 ? 180 : 0,
            scale: 1
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ transformOrigin: "top center" }}
        ></motion.div>

      </div>

      <motion.button 
        className="close-button"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 3 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={24} color="#5e546b" />
      </motion.button>
    </motion.div>
  );
};

export default ApologyLetter;
