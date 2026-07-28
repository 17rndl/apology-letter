import React from 'react';

const OpenBookSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 200 220" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="book1Spine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2c3e50" />
          <stop offset="20%" stopColor="#34495e" />
          <stop offset="80%" stopColor="#2c3e50" />
          <stop offset="100%" stopColor="#1a252f" />
        </linearGradient>
        <linearGradient id="book2Spine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8e44ad" />
          <stop offset="20%" stopColor="#9b59b6" />
          <stop offset="80%" stopColor="#8e44ad" />
          <stop offset="100%" stopColor="#5b2c6f" />
        </linearGradient>
        <linearGradient id="book3Spine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d35400" />
          <stop offset="20%" stopColor="#e67e22" />
          <stop offset="80%" stopColor="#d35400" />
          <stop offset="100%" stopColor="#a04000" />
        </linearGradient>
        
        <linearGradient id="pages" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5f5dc" />
          <stop offset="50%" stopColor="#e8e8cc" />
          <stop offset="100%" stopColor="#d3d3b0" />
        </linearGradient>

        <filter id="shadowGround">
          <feDropShadow dx="0" dy="15" stdDeviation="8" floodColor="#000" floodOpacity="0.4" />
        </filter>
        <filter id="shadowBook">
          <feDropShadow dx="-2" dy="5" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Grounding Contact Shadow */}
      <ellipse cx="100" cy="205" rx="70" ry="15" fill="rgba(0,0,0,0.5)" filter="url(#shadowGround)" />

      {/* --- Book 1 (Bottom) --- */}
      <g transform="translate(10, 160)" filter="url(#shadowBook)">
        {/* Back Cover */}
        <path d="M 0 0 L 160 -20 L 180 -10 L 20 10 Z" fill="#1a252f" />
        {/* Pages */}
        <path d="M 20 10 L 180 -10 L 180 -35 L 20 -15 Z" fill="url(#pages)" />
        {/* Page lines */}
        <path d="M 20 -2 L 180 -22 M 20 -9 L 180 -29" stroke="#c0c0a0" strokeWidth="1" fill="none" />
        {/* Spine */}
        <path d="M 0 0 L 20 10 L 20 -15 L 0 -25 Z" fill="url(#book1Spine)" />
        <path d="M 0 -25 C 10 -30, 20 -20, 20 -15 L 0 0 Z" fill="url(#book1Spine)" />
        {/* Top Cover */}
        <path d="M 0 -25 L 160 -45 L 180 -35 L 20 -15 Z" fill="#34495e" />
        {/* Spine details */}
        <path d="M 5 -20 L 15 -15 M 5 -10 L 15 -5" stroke="#ecf0f1" strokeWidth="1.5" />
      </g>

      {/* --- Book 2 (Middle) --- */}
      <g transform="translate(15, 125) rotate(-5, 90, 0)" filter="url(#shadowBook)">
        <path d="M 0 0 L 150 -18 L 170 -8 L 20 10 Z" fill="#5b2c6f" />
        <path d="M 20 10 L 170 -8 L 170 -30 L 20 -12 Z" fill="url(#pages)" />
        <path d="M 20 -1 L 170 -19 M 20 -6 L 170 -24" stroke="#c0c0a0" strokeWidth="1" fill="none" />
        <path d="M 0 0 L 20 10 L 20 -12 L 0 -22 Z" fill="url(#book2Spine)" />
        <path d="M 0 -22 C 10 -27, 20 -17, 20 -12 L 0 0 Z" fill="url(#book2Spine)" />
        <path d="M 0 -22 L 150 -40 L 170 -30 L 20 -12 Z" fill="#9b59b6" />
        {/* Bookmark ribbon hanging out */}
        <path d="M 90 -22 L 100 20 L 85 25 Z" fill="#f1c40f" filter="url(#shadowBook)" />
      </g>

      {/* --- Book 3 (Top) --- */}
      <g transform="translate(25, 95) rotate(3, 90, 0)" filter="url(#shadowBook)">
        <path d="M 0 0 L 140 -15 L 160 -5 L 20 10 Z" fill="#a04000" />
        <path d="M 20 10 L 160 -5 L 160 -25 L 20 -10 Z" fill="url(#pages)" />
        <path d="M 20 -2.5 L 160 -17.5" stroke="#c0c0a0" strokeWidth="1" fill="none" />
        <path d="M 0 0 L 20 10 L 20 -10 L 0 -20 Z" fill="url(#book3Spine)" />
        <path d="M 0 -20 C 10 -25, 20 -15, 20 -10 L 0 0 Z" fill="url(#book3Spine)" />
        <path d="M 0 -20 L 140 -35 L 160 -25 L 20 -10 Z" fill="#e67e22" />
        {/* Small gold foil square on top cover */}
        <polygon points="60,-27 90,-30 100,-25 70,-22" fill="#f1c40f" opacity="0.8" />
      </g>
    </svg>
  );
};

export default OpenBookSVG;
