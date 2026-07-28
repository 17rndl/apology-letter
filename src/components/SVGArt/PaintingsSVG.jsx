import React from 'react';

export const LandscapePaintingSVG = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff9a9e" />
        <stop offset="100%" stopColor="#fecfef" />
      </linearGradient>
      <linearGradient id="mountains" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a18cd1" />
        <stop offset="100%" stopColor="#fbc2eb" />
      </linearGradient>
      <linearGradient id="mountainsDark" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8e9eab" />
        <stop offset="100%" stopColor="#eef2f3" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="200" height="150" fill="#e8d8c3" rx="4" stroke="#cbb8a0" strokeWidth="2" />
    <rect x="15" y="15" width="170" height="120" fill="#fff" />
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="160" height="110" fill="url(#sky)" />
      <circle cx="80" cy="50" r="25" fill="#fff" opacity="0.9" />
      <path d="M 0 110 L 40 50 L 80 110 Z" fill="url(#mountainsDark)" />
      <path d="M 50 110 L 110 30 L 160 110 Z" fill="url(#mountains)" opacity="0.9" />
      <path d="M 100 110 L 130 70 L 160 110 Z" fill="#cfd9df" />
    </g>
  </svg>
);

export const StarryNightSVG = ({ className }) => (
  <svg viewBox="0 0 150 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="night" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2b5876" />
        <stop offset="100%" stopColor="#4e4376" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="150" height="200" fill="#d4af37" rx="3" stroke="#b89324" strokeWidth="2" />
    <rect x="10" y="10" width="130" height="180" fill="#fff" />
    <g transform="translate(15, 15)">
      <rect x="0" y="0" width="120" height="170" fill="url(#night)" />
      <path d="M 90 40 A 20 20 0 1 1 70 20 A 25 25 0 0 0 90 40 Z" fill="#ffe259" />
      {[...Array(20)].map((_, i) => (
        <circle key={i} cx={10 + (i * 37) % 100} cy={10 + (i * 23) % 100} r={Math.random() * 1.5 + 0.5} fill="#fff" opacity={Math.random() * 0.6 + 0.4} />
      ))}
      <path d="M 0 80 Q 40 50 80 80 T 120 70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
      <path d="M 0 100 Q 30 80 60 110 T 120 90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="5" />
      <path d="M 20 170 L 30 100 Q 35 120 40 170 Z" fill="#1f1c2c" />
      <path d="M 25 170 L 25 120 Q 15 130 10 170 Z" fill="#1f1c2c" opacity="0.9" />
    </g>
  </svg>
);
