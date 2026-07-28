import React from 'react';

const ArtSuppliesSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 200 320" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        {/* Thick Glass Jar Gradients */}
        <linearGradient id="glassBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="10%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="30%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="70%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="90%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
        </linearGradient>

        <linearGradient id="glassRibs" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="10%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="20%" stopColor="transparent" />
          <stop offset="30%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="40%" stopColor="transparent" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="60%" stopColor="transparent" />
          <stop offset="70%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="80%" stopColor="transparent" />
        </linearGradient>

        {/* Wood and Metal Gradients */}
        <linearGradient id="woodHandle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a0522d" />
          <stop offset="50%" stopColor="#deb887" />
          <stop offset="100%" stopColor="#8b4513" />
        </linearGradient>
        <linearGradient id="redHandle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b0000" />
          <stop offset="50%" stopColor="#ff4040" />
          <stop offset="100%" stopColor="#a52a2a" />
        </linearGradient>
        <linearGradient id="metalFerrule" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#888" />
          <stop offset="50%" stopColor="#eee" />
          <stop offset="100%" stopColor="#555" />
        </linearGradient>
        <linearGradient id="yellowPencil" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4a017" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>

        <filter id="shadowGround">
          <feDropShadow dx="0" dy="25" stdDeviation="10" floodColor="#000" floodOpacity="0.4" />
        </filter>
        <filter id="jarShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="5" dy="10" stdDeviation="5" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Grounding Contact Shadow (Very important for anchoring to the desk) */}
      <ellipse cx="100" cy="275" rx="60" ry="18" fill="rgba(0,0,0,0.5)" filter="url(#shadowGround)" />

      <g filter="url(#jarShadow)">
        {/* Back Rim of Glass */}
        <ellipse cx="100" cy="140" rx="65" ry="18" fill="rgba(255,255,255,0.6)" />

        {/* The Supplies (Background/Inside Jar) - Lowered to hit the bottom of the glass */}
        <g transform="translate(0, 75)">
          {/* Thick Red Brush */}
          <g transform="translate(60, 50) rotate(-15)">
            <rect x="-8" y="0" width="16" height="150" fill="url(#redHandle)" rx="2" />
            <rect x="-9" y="-25" width="18" height="25" fill="url(#metalFerrule)" />
            <path d="M-9,-25 C -12,-55 12,-55 9,-25 Z" fill="#cfb997" />
            <path d="M-6,-45 C 0,-55 6,-45 8,-35 C 4,-30 -4,-30 -6,-45 Z" fill="#1e90ff" opacity="0.8" />
          </g>

          {/* Yellow Hex Pencil */}
          <g transform="translate(100, 60) rotate(5)">
            <rect x="-5" y="0" width="10" height="150" fill="url(#yellowPencil)" />
            <line x1="-2" y1="0" x2="-2" y2="150" stroke="#b8860b" strokeWidth="0.5" />
            <line x1="2" y1="0" x2="2" y2="150" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
            <path d="M-5,0 L0,-15 L5,0 Z" fill="#deb887" />
            <polygon points="-1,-12 0,-15 1,-12" fill="#333" />
            <rect x="-5" y="150" width="10" height="15" fill="#f4a460" />
            <rect x="-5" y="145" width="10" height="5" fill="url(#metalFerrule)" />
          </g>

          {/* Thin Wooden Brush */}
          <g transform="translate(125, 70) rotate(18)">
            <rect x="-4" y="0" width="8" height="140" fill="url(#woodHandle)" rx="1" />
            <rect x="-4.5" y="-15" width="9" height="15" fill="url(#metalFerrule)" />
            <path d="M-4.5,-15 Q0,-45 4.5,-15 Z" fill="#8b4513" />
            <path d="M-2,-30 Q0,-40 2,-30 L0,-20 Z" fill="#dc143c" />
          </g>
        </g>

        {/* Jar Body Front (Semi-transparent) */}
        <path d="M 35 140 L 45 270 C 45 290, 155 290, 155 270 L 165 140 Z" fill="url(#glassBody)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
        <path d="M 35 140 L 45 270 C 45 290, 155 290, 155 270 L 165 140 Z" fill="url(#glassRibs)" opacity="0.7" />

        {/* Front Rim (Lip of the glass) */}
        <path d="M 35 140 A 65 18 0 0 0 165 140" fill="none" stroke="#ffffff" strokeWidth="4" />
        <path d="M 35 140 A 65 18 0 0 0 165 140" fill="none" stroke="rgba(200,200,200,0.5)" strokeWidth="1" transform="translate(0,2)" />

        {/* Bottom Inner Base of Glass (Grounds the inside elements) */}
        <ellipse cx="100" cy="272" rx="54" ry="14" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />

        {/* Glass Highlights */}
        <path d="M 50 145 L 60 265" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        <path d="M 65 148 L 72 260" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </g>
    </svg>
  );
};

export default ArtSuppliesSVG;
