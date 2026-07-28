import React from 'react';

const BouquetSVG = ({ className }) => {
  return (
    <svg viewBox="-50 -50 250 350" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        {/* Intricate Daisy Centers */}
        <radialGradient id="daisyCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffee58" />
          <stop offset="50%" stopColor="#fbc02d" />
          <stop offset="80%" stopColor="#f57f17" />
          <stop offset="100%" stopColor="#b26500" />
        </radialGradient>
        
        {/* Deep Peony Gradients for layering */}
        <radialGradient id="peonyDark" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4081" />
          <stop offset="70%" stopColor="#c51162" />
          <stop offset="100%" stopColor="#880e4f" />
        </radialGradient>
        <linearGradient id="peonyPetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff80ab" />
          <stop offset="50%" stopColor="#ff4081" />
          <stop offset="100%" stopColor="#f50057" />
        </linearGradient>
        <linearGradient id="peonyLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe4e1" />
          <stop offset="100%" stopColor="#ffb6c1" />
        </linearGradient>

        <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2e7d32" />
          <stop offset="50%" stopColor="#4caf50" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>

        {/* Realistic Vase Refraction Gradients */}
        <linearGradient id="vaseGlass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="15%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="85%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
        </linearGradient>
        
        <linearGradient id="vaseWater" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(135,206,235,0.4)" />
          <stop offset="50%" stopColor="rgba(135,206,235,0.1)" />
          <stop offset="100%" stopColor="rgba(135,206,235,0.5)" />
        </linearGradient>

        <filter id="flowerShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.25" />
        </filter>
        <filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.3" />
        </filter>
        <filter id="shadowGround">
          <feDropShadow dx="0" dy="25" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Grounding Contact Shadow for the Vase */}
      <ellipse cx="75" cy="285" rx="42" ry="12" fill="rgba(0,0,0,0.6)" filter="url(#shadowGround)" />

      {/* Underwater Stems (Distorted by water refraction) - Pushed down to base */}
      <g opacity="0.6">
        <path d="M 60 160 Q 65 220 50 280" fill="none" stroke="url(#stemGrad)" strokeWidth="6" strokeLinecap="round" />
        <path d="M 80 160 Q 75 220 95 280" fill="none" stroke="url(#stemGrad)" strokeWidth="5" strokeLinecap="round" />
        <path d="M 70 160 Q 80 220 75 280" fill="none" stroke="url(#stemGrad)" strokeWidth="7" strokeLinecap="round" />
      </g>

      <g filter="url(#flowerShadow)">
        {/* Above Water Stems */}
        <path d="M 75 160 Q 60 110 30 70" fill="none" stroke="url(#stemGrad)" strokeWidth="5" strokeLinecap="round" />
        <path d="M 75 160 Q 90 120 120 70" fill="none" stroke="url(#stemGrad)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 75 160 Q 75 130 80 90" fill="none" stroke="url(#stemGrad)" strokeWidth="6" strokeLinecap="round" />

        {/* Leaves */}
        <path d="M 60 130 C 40 120, 20 140, 30 150 C 40 160, 55 140, 60 130 Z" fill="url(#stemGrad)" />
        <path d="M 85 140 C 110 130, 130 150, 120 160 C 110 170, 95 150, 85 140 Z" fill="url(#stemGrad)" />
        <path d="M 70 110 C 90 90, 110 100, 100 120 C 90 130, 70 120, 70 110 Z" fill="url(#stemGrad)" />

        {/* --- DAISY 1 (Top Left) --- */}
        <g transform="translate(15, 55) scale(0.9)">
          <g fill="#ffffff" stroke="#e0e0e0" strokeWidth="0.5" filter="url(#petalShadow)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
              <path key={angle} d="M 0 0 C -12 -20, -10 -45, 0 -50 C 10 -45, 12 -20, 0 0 Z" transform={`rotate(${angle})`} />
            ))}
          </g>
          <circle cx="0" cy="0" r="14" fill="url(#daisyCenter)" />
          <g fill="#8c4a00" opacity="0.6">
             <circle cx="-3" cy="-4" r="1.5" /><circle cx="4" cy="-2" r="1" /><circle cx="1" cy="5" r="1.5" />
             <circle cx="-6" cy="2" r="1" /><circle cx="5" cy="4" r="1" />
          </g>
        </g>

        {/* --- DAISY 2 (Top Right) --- */}
        <g transform="translate(120, 70) scale(0.85) rotate(15)">
          <g fill="#ffffff" stroke="#e0e0e0" strokeWidth="0.5" filter="url(#petalShadow)">
            {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, i) => (
              <path key={angle} d="M 0 0 C -12 -20, -10 -45, 0 -50 C 10 -45, 12 -20, 0 0 Z" transform={`rotate(${angle})`} />
            ))}
          </g>
          <circle cx="0" cy="0" r="14" fill="url(#daisyCenter)" />
          <g fill="#8c4a00" opacity="0.6">
             <circle cx="-3" cy="-4" r="1.5" /><circle cx="4" cy="-2" r="1" /><circle cx="1" cy="5" r="1.5" />
          </g>
        </g>

        {/* --- PINK PEONY (Center Bottom) --- */}
        <g transform="translate(80, 100) scale(1.1)">
          <g fill="url(#peonyDark)" filter="url(#petalShadow)">
            {[0, 72, 144, 216, 288].map(angle => (
               <path key={angle} d="M 0 0 C -25 -20, -35 -50, 0 -60 C 35 -50, 25 -20, 0 0 Z" transform={`rotate(${angle})`} />
            ))}
          </g>
          <g fill="url(#peonyPetal)" filter="url(#petalShadow)">
            {[36, 108, 180, 252, 324].map(angle => (
               <path key={angle} d="M 0 0 C -20 -15, -25 -40, 0 -45 C 25 -40, 20 -15, 0 0 Z" transform={`rotate(${angle})`} />
            ))}
          </g>
          <g fill="url(#peonyLight)" filter="url(#petalShadow)">
            {[18, 90, 162, 234, 306].map(angle => (
               <path key={angle} d="M 0 0 C -15 -10, -20 -30, 0 -35 C 20 -30, 15 -10, 0 0 Z" transform={`rotate(${angle})`} />
            ))}
          </g>
          <circle cx="0" cy="0" r="10" fill="url(#daisyCenter)" />
          <g stroke="#ffea00" strokeWidth="1.5">
            <line x1="0" y1="0" x2="-8" y2="-12" /><circle cx="-8" cy="-12" r="2" fill="#ffb300" stroke="none" />
            <line x1="0" y1="0" x2="10" y2="-10" /><circle cx="10" cy="-10" r="2" fill="#ffb300" stroke="none" />
            <line x1="0" y1="0" x2="-10" y2="8" /><circle cx="-10" cy="8" r="2" fill="#ffb300" stroke="none" />
            <line x1="0" y1="0" x2="8" y2="10" /><circle cx="8" cy="10" r="2" fill="#ffb300" stroke="none" />
          </g>
        </g>
      </g>

      {/* --- HYPER-REALISTIC VASE --- */}
      {/* Back rim of vase */}
      <ellipse cx="75" cy="160" rx="35" ry="10" fill="rgba(255,255,255,0.6)" />
      
      {/* Vase Body */}
      <path d="M 40 160 L 30 280 C 30 295, 120 295, 120 280 L 110 160 Z" fill="url(#vaseGlass)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
      
      {/* Water Body inside vase */}
      <path d="M 43 185 L 34 278 C 34 290, 116 290, 116 278 L 107 185 Z" fill="url(#vaseWater)" />
      
      {/* Water Surface Line */}
      <ellipse cx="75" cy="185" rx="32" ry="8" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      
      {/* Glass Highlights */}
      <path d="M 48 165 L 42 270" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      <path d="M 98 168 L 102 265" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      
      {/* Front rim of vase */}
      <path d="M 40 160 A 35 10 0 0 0 110 160" fill="none" stroke="#ffffff" strokeWidth="3" />
      
      {/* Bottom curvature highlight */}
      <path d="M 38 280 A 42 12 0 0 0 112 280" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
    </svg>
  );
};

export default BouquetSVG;
