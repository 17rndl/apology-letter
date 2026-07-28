import React from 'react';

const PaintPaletteSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d1a57b" />
          <stop offset="50%" stopColor="#bc8a5f" />
          <stop offset="100%" stopColor="#9c6840" />
        </linearGradient>
      </defs>
      
      {/* Palette Body */}
      <path d="M 30 75 C 30 20, 100 10, 150 30 C 190 50, 180 120, 130 130 C 90 140, 70 110, 60 110 C 50 110, 30 130, 30 75 Z" fill="url(#woodGradient)" stroke="#8b5a2b" strokeWidth="2" />
      
      {/* Thumb Hole */}
      <ellipse cx="65" cy="115" rx="15" ry="10" fill="#a67b5b" transform="rotate(-20 65 115)" />
      
      {/* Paint Blobs */}
      <circle cx="70" cy="40" r="12" fill="#e63946" opacity="0.9" />
      <circle cx="110" cy="35" r="14" fill="#f4a261" opacity="0.9" />
      <circle cx="150" cy="55" r="16" fill="#e9c46a" opacity="0.9" />
      <circle cx="160" cy="95" r="13" fill="#2a9d8f" opacity="0.9" />
      <circle cx="130" cy="115" r="11" fill="#264653" opacity="0.9" />
      <circle cx="95" cy="110" r="10" fill="#ffffff" opacity="0.8" />
    </svg>
  );
};

export default PaintPaletteSVG;
