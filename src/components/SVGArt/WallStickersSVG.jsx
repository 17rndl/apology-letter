import React from 'react';

const WallStickersSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className={className} xmlns="http://www.w3.org/2000/svg">
      
      {/* Sparkles */}
      <g stroke="#ffd700" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <path d="M 100 100 L 100 120 M 90 110 L 110 110" />
        <path d="M 300 250 L 300 270 M 290 260 L 310 260" />
        <path d="M 800 150 L 800 170 M 790 160 L 810 160" />
        <path d="M 600 400 L 600 420 M 590 410 L 610 410" />
      </g>

      {/* Hearts */}
      <g fill="#ffb7b2" opacity="0.7">
        <path d="M 150 200 C 150 190, 135 190, 135 200 C 135 215, 150 225, 150 225 C 150 225, 165 215, 165 200 C 165 190, 150 190, 150 200 Z" transform="scale(0.5) translate(150, 200) rotate(15)" />
        <path d="M 150 200 C 150 190, 135 190, 135 200 C 135 215, 150 225, 150 225 C 150 225, 165 215, 165 200 C 165 190, 150 190, 150 200 Z" transform="scale(0.8) translate(800, 100) rotate(-20)" />
        <path d="M 150 200 C 150 190, 135 190, 135 200 C 135 215, 150 225, 150 225 C 150 225, 165 215, 165 200 C 165 190, 150 190, 150 200 Z" transform="scale(0.6) translate(500, 700) rotate(45)" fill="#ff9aa2" />
      </g>

      {/* Crescent Moons */}
      <g fill="#fdfd96" opacity="0.6">
        <path d="M 400 120 A 15 15 0 1 0 420 140 A 20 20 0 1 1 400 120 Z" transform="rotate(-30 400 120)" />
        <path d="M 850 350 A 15 15 0 1 0 870 370 A 20 20 0 1 1 850 350 Z" transform="rotate(20 850 350)" />
      </g>
    </svg>
  );
};

export default WallStickersSVG;
