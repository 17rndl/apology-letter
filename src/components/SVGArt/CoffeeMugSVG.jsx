import React from 'react';

const CoffeeMugSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 200 240" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        {/* Volumetric Mug Gradient */}
        <linearGradient id="mugBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d1ccc0" />
          <stop offset="15%" stopColor="#fdfbf7" />
          <stop offset="75%" stopColor="#e5e0d4" />
          <stop offset="100%" stopColor="#b3ae9f" />
        </linearGradient>

        {/* Inside Rim Shadow */}
        <linearGradient id="mugInside" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="20%" stopColor="#d1ccc0" />
          <stop offset="100%" stopColor="#a39f93" />
        </linearGradient>

        {/* Coffee Liquid */}
        <radialGradient id="coffeeLiquid" cx="60%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#4a2511" />
          <stop offset="80%" stopColor="#2c1407" />
          <stop offset="100%" stopColor="#1a0b03" />
        </radialGradient>

        {/* Elegant Steam Blur */}
        <filter id="steamBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="mugShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="10" dy="15" stdDeviation="10" floodColor="#000" floodOpacity="0.25" />
        </filter>
        
        <filter id="shadowGround">
          <feDropShadow dx="0" dy="20" stdDeviation="8" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Grounding Contact Shadow */}
      <ellipse cx="100" cy="205" rx="45" ry="12" fill="rgba(0,0,0,0.5)" filter="url(#shadowGround)" />

      <g filter="url(#mugShadow)">
        {/* The Handle (Drawn first so it goes behind mug body) */}
        <path d="M 140 100 C 220 90, 220 180, 140 170 C 180 160, 180 110, 140 115 Z" fill="#e5e0d4" stroke="#c4bead" strokeWidth="2" />
        <path d="M 145 102 C 205 95, 205 175, 145 168 C 175 158, 175 112, 145 116 Z" fill="#fdfbf7" />

        {/* The Mug Body (Cylinder) */}
        <path d="M 40 80 L 50 200 C 50 220, 150 220, 150 200 L 160 80 Z" fill="url(#mugBody)" />
        
        {/* The Mug Bottom Rim Curve (No full ellipse so back doesn't show) */}
        <path d="M 50 200 C 50 220, 150 220, 150 200" fill="none" stroke="#a39f93" strokeWidth="4" />
        <path d="M 50 200 C 50 220, 150 220, 150 200" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="6" />

        {/* The Mug Inside Hole */}
        <ellipse cx="100" cy="80" rx="60" ry="20" fill="url(#mugInside)" />
        
        {/* The Rich Coffee Liquid */}
        <ellipse cx="100" cy="83" rx="55" ry="17" fill="url(#coffeeLiquid)" />

        {/* Liquid Specular Highlight (The glossy ring on the edge of the coffee) */}
        <ellipse cx="100" cy="83" rx="52" ry="15" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <path d="M 50 83 C 50 75, 75 68, 100 68" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />

        {/* The Top Outer Rim Highlight */}
        <ellipse cx="100" cy="80" rx="60" ry="20" fill="none" stroke="#fdfbf7" strokeWidth="3" />
        <path d="M 40 80 C 40 95, 160 95, 160 80" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
      </g>

      {/* Volumetric Curled Steam */}
      <g filter="url(#steamBlur)" opacity="0.6">
        <path d="M 80 75 C 60 50, 110 30, 90 0" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        <path d="M 110 75 C 130 40, 80 25, 120 -10" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        <path d="M 100 60 C 90 40, 120 20, 105 -5" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      </g>
    </svg>
  );
};

export default CoffeeMugSVG;
