import React from 'react';

const CoffeeMugSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 100 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mugGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e6e6e6" />
          <stop offset="100%" stopColor="#cccccc" />
        </linearGradient>
        <radialGradient id="coffeeLiquid" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4a2e1b" />
          <stop offset="80%" stopColor="#2c1a0e" />
          <stop offset="100%" stopColor="#1a0f08" />
        </radialGradient>
      </defs>
      
      {/* Handle */}
      <path d="M 75 45 C 100 45, 100 85, 75 85" fill="none" stroke="url(#mugGradient)" strokeWidth="8" strokeLinecap="round" />
      
      {/* Mug Body */}
      <path d="M 20 30 L 25 100 Q 50 110 75 100 L 80 30 Z" fill="url(#mugGradient)" />
      
      {/* Mug Rim Outer */}
      <ellipse cx="50" cy="30" rx="30" ry="10" fill="#f0f0f0" />
      
      {/* Mug Inside */}
      <ellipse cx="50" cy="30" rx="26" ry="8" fill="#d9d9d9" />
      
      {/* Coffee Liquid */}
      <ellipse cx="50" cy="32" rx="24" ry="7" fill="url(#coffeeLiquid)" />
    </svg>
  );
};

export default CoffeeMugSVG;
