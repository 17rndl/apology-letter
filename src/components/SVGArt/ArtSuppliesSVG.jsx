import React from 'react';

const ArtSuppliesSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 100 150" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Glass Jar Gradients */}
        <linearGradient id="glassBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="15%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="30%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="85%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
        </linearGradient>
        <linearGradient id="wood" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d2a679" />
          <stop offset="100%" stopColor="#8b5a2b" />
        </linearGradient>
        <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#cccccc" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#999999" />
        </linearGradient>
      </defs>
      
      {/* Background Brushes (inside jar) */}
      <g transform="translate(0, 10)">
        {/* Brush 1 */}
        <g transform="translate(30, 20) rotate(-15)">
          <rect x="-4" y="0" width="8" height="90" fill="url(#wood)" />
          <rect x="-4.5" y="-15" width="9" height="15" fill="url(#metal)" />
          <path d="M-4.5,-15 Q0,-35 4.5,-15 Z" fill="#4a2e1b" />
        </g>
        
        {/* Pencil */}
        <g transform="translate(55, 30) rotate(10)">
          <rect x="-3" y="0" width="6" height="80" fill="#f4d03f" />
          <path d="M-3,0 L0,-10 L3,0 Z" fill="#d2a679" />
          <polygon points="-1,-7 0,-10 1,-7" fill="#333" />
        </g>
        
        {/* Brush 2 */}
        <g transform="translate(70, 40) rotate(25)">
          <rect x="-3" y="0" width="6" height="70" fill="url(#wood)" />
          <rect x="-3.5" y="-10" width="7" height="10" fill="url(#metal)" />
          <path d="M-3.5,-10 Q0,-25 3.5,-10 Z" fill="#2c3e50" />
        </g>
      </g>
      
      {/* Jar Back Rim */}
      <ellipse cx="50" cy="75" rx="35" ry="10" fill="rgba(255,255,255,0.4)" />

      {/* Jar Body */}
      <path d="M 15 75 L 20 140 Q 50 150 80 140 L 85 75 Z" fill="url(#glassBody)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      
      {/* Jar Front Rim */}
      <path d="M 15 75 A 35 10 0 0 0 85 75" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" />
      
      {/* Jar Bottom Rim */}
      <ellipse cx="50" cy="140" rx="30" ry="8" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
    </svg>
  );
};

export default ArtSuppliesSVG;
