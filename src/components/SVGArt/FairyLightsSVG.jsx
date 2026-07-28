import React from 'react';

const FairyLightsSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 1000 150" preserveAspectRatio="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Wires */}
      <path d="M -10 20 Q 125 100 250 20 Q 375 100 500 20 Q 625 100 750 20 Q 875 100 1010 20" fill="none" stroke="#333" strokeWidth="1.5" opacity="0.6" />
      <path d="M -10 40 Q 150 130 300 40 Q 450 130 600 40 Q 750 130 900 40 Q 950 80 1010 40" fill="none" stroke="#333" strokeWidth="1" opacity="0.4" />

      {/* Bulbs on wire 1 */}
      {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980].map((x, i) => {
        const wave = x % 250;
        const normalized = wave / 250;
        const y = 20 + 4 * 80 * normalized * (1 - normalized);
        
        return (
          <g key={`bulb1-${i}`} transform={`translate(${x}, ${y})`} filter="url(#glow)">
            <circle cx="0" cy="0" r="4" fill="#fff9c4" />
            <circle cx="0" cy="0" r="2" fill="#ffffff" />
          </g>
        );
      })}

      {/* Bulbs on wire 2 */}
      {[40, 90, 140, 190, 240, 290, 340, 390, 440, 490, 540, 590, 640, 690, 740, 790, 840, 890, 940, 990].map((x, i) => {
        const wave = x % 300;
        const normalized = wave / 300;
        const y = 40 + 4 * 90 * normalized * (1 - normalized);
        
        return (
          <g key={`bulb2-${i}`} transform={`translate(${x}, ${y})`} filter="url(#glow)">
            <circle cx="0" cy="0" r="3.5" fill="#ffecb3" />
            <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
          </g>
        );
      })}
    </svg>
  );
};

export default FairyLightsSVG;
