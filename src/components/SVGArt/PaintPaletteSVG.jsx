import React from 'react';

const PaintPaletteSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 300 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Wood Texture for Palette */}
        <linearGradient id="paletteWood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c396" />
          <stop offset="50%" stopColor="#d4a373" />
          <stop offset="100%" stopColor="#b5835a" />
        </linearGradient>

        <linearGradient id="paletteEdge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b5835a" />
          <stop offset="100%" stopColor="#7a5436" />
        </linearGradient>

        {/* 3D Paint Dollop Drop Shadow */}
        <filter id="paintShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
        </filter>

        <filter id="paletteShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="8" dy="12" stdDeviation="8" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Inner shadow trick for glossy paint volume */}
        <radialGradient id="paintRed" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ff7b7b" />
          <stop offset="60%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#8a111a" />
        </radialGradient>

        <radialGradient id="paintBlue" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#89c2d9" />
          <stop offset="60%" stopColor="#2a6f97" />
          <stop offset="100%" stopColor="#013a63" />
        </radialGradient>

        <radialGradient id="paintYellow" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff3b0" />
          <stop offset="60%" stopColor="#e9c46a" />
          <stop offset="100%" stopColor="#9c7821" />
        </radialGradient>

        <radialGradient id="paintGreen" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#a7c957" />
          <stop offset="60%" stopColor="#6a994e" />
          <stop offset="100%" stopColor="#386641" />
        </radialGradient>

        <radialGradient id="paintWhite" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e0e0e0" />
          <stop offset="100%" stopColor="#a3a3a3" />
        </radialGradient>
      </defs>

      <g filter="url(#paletteShadow)">
        {/* The Wooden Palette Base (Edge thickness) */}
        <path d="M 50 100 C 20 40, 100 10, 180 20 C 260 30, 300 80, 270 140 C 240 200, 150 200, 120 180 C 100 165, 80 180, 50 140 C 20 100, 40 120, 50 100 Z" fill="url(#paletteEdge)" transform="translate(0, 8)" />
        
        {/* The Wooden Palette Top Surface */}
        <path d="M 50 100 C 20 40, 100 10, 180 20 C 260 30, 300 80, 270 140 C 240 200, 150 200, 120 180 C 100 165, 80 180, 50 140 C 20 100, 40 120, 50 100 Z" fill="url(#paletteWood)" stroke="#c2966b" strokeWidth="2" />
        
        {/* The Thumb Hole */}
        <ellipse cx="230" cy="120" rx="18" ry="25" fill="#7a5436" transform="rotate(-15 230 120)" />
        <ellipse cx="228" cy="118" rx="18" ry="25" fill="none" stroke="#fff" strokeWidth="1" opacity="0.2" transform="rotate(-15 230 120)" />

        {/* Wood grain curves (Subtle) */}
        <path d="M 60 50 Q 150 20 220 50" fill="none" stroke="#b5835a" strokeWidth="1.5" opacity="0.4" />
        <path d="M 40 100 Q 120 80 180 130" fill="none" stroke="#b5835a" strokeWidth="2" opacity="0.3" />
        <path d="M 80 160 Q 150 150 190 180" fill="none" stroke="#b5835a" strokeWidth="1.5" opacity="0.4" />

        {/* Messy Mixed Paint in the Center */}
        <path d="M 120 90 Q 160 80 150 110 Q 130 130 110 100 Z" fill="url(#paintRed)" opacity="0.6" filter="url(#paintShadow)" />
        <path d="M 130 100 Q 170 120 140 140 Q 110 120 130 100 Z" fill="url(#paintBlue)" opacity="0.5" />
        <path d="M 145 95 Q 180 90 160 125 Q 120 110 145 95 Z" fill="url(#paintWhite)" opacity="0.7" />

        {/* 3D Volumetric Glossy Paint Dollops */}
        {/* Red */}
        <circle cx="85" cy="55" r="16" fill="url(#paintRed)" filter="url(#paintShadow)" />
        <ellipse cx="80" cy="50" rx="4" ry="2" fill="#fff" opacity="0.8" transform="rotate(-20 80 50)" />
        
        {/* Yellow */}
        <circle cx="145" cy="35" r="14" fill="url(#paintYellow)" filter="url(#paintShadow)" />
        <path d="M 155 35 Q 165 45 150 50 Z" fill="url(#paintYellow)" filter="url(#paintShadow)" /> {/* Paint smear */}
        <ellipse cx="140" cy="31" rx="3" ry="1.5" fill="#fff" opacity="0.9" transform="rotate(-15 140 31)" />
        
        {/* Green */}
        <circle cx="205" cy="45" r="15" fill="url(#paintGreen)" filter="url(#paintShadow)" />
        <ellipse cx="200" cy="40" rx="4" ry="2" fill="#fff" opacity="0.8" transform="rotate(-30 200 40)" />

        {/* Blue */}
        <circle cx="255" cy="75" r="17" fill="url(#paintBlue)" filter="url(#paintShadow)" />
        <path d="M 255 75 Q 240 100 230 85 Z" fill="url(#paintBlue)" filter="url(#paintShadow)" /> {/* Smear */}
        <ellipse cx="250" cy="70" rx="5" ry="2.5" fill="#fff" opacity="0.8" transform="rotate(-40 250 70)" />

        {/* White */}
        <circle cx="65" cy="115" r="18" fill="url(#paintWhite)" filter="url(#paintShadow)" />
        <ellipse cx="60" cy="110" rx="5" ry="3" fill="#fff" opacity="0.9" transform="rotate(-10 60 110)" />
      </g>
    </svg>
  );
};

export default PaintPaletteSVG;
