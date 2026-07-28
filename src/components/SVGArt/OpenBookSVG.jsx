import React from 'react';

const OpenBookSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 200 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pageGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e6e0d4" />
          <stop offset="80%" stopColor="#fdfaf3" />
          <stop offset="100%" stopColor="#d5cebe" />
        </linearGradient>
        <linearGradient id="pageGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d5cebe" />
          <stop offset="20%" stopColor="#fdfaf3" />
          <stop offset="100%" stopColor="#e6e0d4" />
        </linearGradient>
      </defs>
      
      {/* Cover Bottom */}
      <path d="M 10 35 C 40 25, 80 25, 100 40 C 120 25, 160 25, 190 35 L 180 95 C 150 85, 110 85, 100 100 C 90 85, 50 85, 20 95 Z" fill="#4a5d4e" stroke="#334237" strokeWidth="2" />
      
      {/* Stack of pages (thickness) */}
      <path d="M 14 32 C 40 22, 80 22, 98 37 L 98 90 C 80 75, 40 75, 16 85 Z" fill="#d5cebe" />
      <path d="M 186 32 C 160 22, 120 22, 102 37 L 102 90 C 120 75, 160 75, 184 85 Z" fill="#d5cebe" />

      {/* Top Left Page */}
      <path d="M 18 30 C 45 18, 85 20, 100 35 L 100 95 C 85 80, 45 78, 20 90 Z" fill="url(#pageGradientLeft)" />
      
      {/* Top Right Page */}
      <path d="M 182 30 C 155 18, 115 20, 100 35 L 100 95 C 115 80, 155 78, 180 90 Z" fill="url(#pageGradientRight)" />
      
      {/* Center Crease */}
      <line x1="100" y1="35" x2="100" y2="95" stroke="#b0a896" strokeWidth="2" />
      
      {/* Ribbon Bookmark */}
      <path d="M 100 35 L 110 110 L 100 105 L 90 110 Z" fill="#b33939" opacity="0.9" />

      {/* Subtle text lines on left page */}
      {[45, 55, 65, 75].map((y, i) => (
        <path key={i} d={`M 30 ${y} Q 60 ${y - 8} 85 ${y - 2}`} fill="none" stroke="#d5cebe" strokeWidth="2" strokeLinecap="round" />
      ))}
      
      {/* Subtle text lines on right page */}
      {[45, 55, 65, 75].map((y, i) => (
        <path key={i} d={`M 115 ${y - 2} Q 140 ${y - 8} 170 ${y}`} fill="none" stroke="#d5cebe" strokeWidth="2" strokeLinecap="round" />
      ))}
    </svg>
  );
};

export default OpenBookSVG;
