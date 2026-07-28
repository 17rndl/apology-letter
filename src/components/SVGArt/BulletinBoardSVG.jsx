import React from 'react';

const BulletinBoardSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="cork" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#d0ab8c" />
          <circle cx="5" cy="5" r="1.5" fill="#a07855" opacity="0.5" />
          <circle cx="15" cy="12" r="1" fill="#8c6139" opacity="0.6" />
          <circle cx="8" cy="18" r="1.5" fill="#a07855" opacity="0.4" />
          <circle cx="18" cy="3" r="1" fill="#8c6139" opacity="0.5" />
        </pattern>
        <linearGradient id="frame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5a2b" />
          <stop offset="100%" stopColor="#5c3a21" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="5" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Frame */}
      <rect x="5" y="5" width="390" height="290" fill="url(#frame)" rx="4" />
      {/* Cork */}
      <rect x="15" y="15" width="370" height="270" fill="url(#cork)" />

      {/* Sticky Note 1 (Yellow) */}
      <g transform="translate(40, 40) rotate(-5)" filter="url(#shadow)">
        <rect width="70" height="70" fill="#fdfd96" />
        <line x1="10" y1="20" x2="60" y2="20" stroke="#d4d471" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="35" x2="50" y2="35" stroke="#d4d471" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="50" x2="55" y2="50" stroke="#d4d471" strokeWidth="2" strokeLinecap="round" />
        {/* Red Pushpin */}
        <circle cx="35" cy="8" r="4" fill="#ff6961" />
        <circle cx="34" cy="7" r="1.5" fill="#fff" opacity="0.6" />
      </g>

      {/* Polaroid 1 */}
      <g transform="translate(130, 30) rotate(8)" filter="url(#shadow)">
        <rect width="90" height="110" fill="#fff" />
        <rect x="5" y="5" width="80" height="75" fill="#add8e6" />
        {/* Simple drawing in polaroid */}
        <circle cx="45" cy="40" r="15" fill="#fdfd96" />
        <path d="M 5 80 Q 25 50 45 80 T 85 80" fill="#8fbc8f" />
        <text x="45" y="100" fontSize="10" fontFamily="sans-serif" fill="#666" textAnchor="middle">Summer</text>
        {/* Blue Pushpin */}
        <circle cx="45" cy="8" r="4" fill="#77dd77" />
      </g>

      {/* Sticky Note 2 (Pink) */}
      <g transform="translate(240, 50) rotate(-12)" filter="url(#shadow)">
        <rect width="80" height="80" fill="#ffb7b2" />
        {/* Heart doodle */}
        <path d="M 40 35 C 40 25, 25 25, 25 35 C 25 50, 40 60, 40 60 C 40 60, 55 50, 55 35 C 55 25, 40 25, 40 35 Z" fill="#ff9aa2" />
        {/* Yellow Pushpin */}
        <circle cx="40" cy="8" r="4" fill="#fdfd96" />
      </g>

      {/* Polaroid 2 */}
      <g transform="translate(50, 140) rotate(-3)" filter="url(#shadow)">
        <rect width="80" height="100" fill="#fff" />
        <rect x="5" y="5" width="70" height="70" fill="#ffdac1" />
        {/* Cat doodle */}
        <path d="M 25 60 L 25 40 L 32 45 L 48 45 L 55 40 L 55 60 Z" fill="#fff" />
        <circle cx="35" cy="52" r="2" fill="#333" />
        <circle cx="45" cy="52" r="2" fill="#333" />
        {/* Pin */}
        <circle cx="40" cy="8" r="4" fill="#c7ceea" />
      </g>

      {/* Sticky Note 3 (Blue) */}
      <g transform="translate(160, 160) rotate(5)" filter="url(#shadow)">
        <rect width="90" height="70" fill="#c7ceea" />
        <line x1="15" y1="20" x2="75" y2="20" stroke="#a0a8cf" strokeWidth="2" />
        <line x1="15" y1="35" x2="65" y2="35" stroke="#a0a8cf" strokeWidth="2" />
        <circle cx="45" cy="8" r="4" fill="#ffb7b2" />
      </g>
      
      {/* String with hanging photo */}
      <path d="M 280 150 Q 330 180 370 140" fill="none" stroke="#e0e0e0" strokeWidth="1.5" />
      <circle cx="280" cy="150" r="3" fill="#888" />
      <circle cx="370" cy="140" r="3" fill="#888" />
      
      <g transform="translate(300, 160) rotate(15)" filter="url(#shadow)">
        <rect width="60" height="75" fill="#fff" />
        <rect x="5" y="5" width="50" height="50" fill="#ff9aa2" />
        {/* Clip */}
        <rect x="25" y="-5" width="10" height="15" fill="#ccc" rx="2" />
      </g>

    </svg>
  );
};

export default BulletinBoardSVG;
