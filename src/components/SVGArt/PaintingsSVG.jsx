import React from 'react';

export const LandscapePaintingSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 300 220" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Frame Wood Texture */}
        <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5a2b" />
          <stop offset="50%" stopColor="#a06836" />
          <stop offset="100%" stopColor="#5c3a21" />
        </linearGradient>

        <linearGradient id="frameInnerShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>

        {/* Sunset Sky Gradient */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff7e67" />
          <stop offset="40%" stopColor="#ffb4a2" />
          <stop offset="100%" stopColor="#ffd166" />
        </linearGradient>

        {/* Mountain Gradients for Atmospheric Depth */}
        <linearGradient id="mountainBack" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e5989b" />
          <stop offset="100%" stopColor="#b5838d" />
        </linearGradient>
        <linearGradient id="mountainMid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b5838d" />
          <stop offset="100%" stopColor="#6d6875" />
        </linearGradient>
        <linearGradient id="mountainFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6d6875" />
          <stop offset="100%" stopColor="#355070" />
        </linearGradient>

        {/* Soft Sun Glow */}
        <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* The Outer Frame */}
      <rect x="0" y="0" width="300" height="220" fill="url(#frameGrad)" rx="8" />
      <path d="M 8 8 L 292 8 L 282 18 L 18 18 Z" fill="rgba(255,255,255,0.15)" /> {/* Top Bevel */}
      <path d="M 8 212 L 292 212 L 282 202 L 18 202 Z" fill="rgba(0,0,0,0.3)" /> {/* Bottom Bevel */}
      <path d="M 8 8 L 18 18 L 18 202 L 8 212 Z" fill="rgba(255,255,255,0.05)" /> {/* Left Bevel */}
      <path d="M 292 8 L 282 18 L 282 202 L 292 212 Z" fill="rgba(0,0,0,0.2)" /> {/* Right Bevel */}

      {/* The Canvas Area (Clipped to stay inside frame) */}
      <svg x="18" y="18" width="264" height="184" viewBox="0 0 264 184">
        {/* Sky Background */}
        <rect x="0" y="0" width="264" height="184" fill="url(#skyGrad)" />
        
        {/* The Glowing Sun */}
        <circle cx="132" cy="90" r="30" fill="#fff" filter="url(#sunGlow)" />
        <circle cx="132" cy="90" r="25" fill="#fff3b0" />

        {/* Aesthetic Clouds */}
        <g fill="#ffffff" opacity="0.4">
          <path d="M 40 50 Q 50 30 70 40 Q 90 30 100 50 Q 110 50 110 60 L 30 60 Q 30 50 40 50 Z" />
          <path d="M 180 70 Q 190 55 210 65 Q 225 55 235 70 Q 245 70 245 80 L 170 80 Q 170 70 180 70 Z" />
        </g>

        {/* Back Mountains (Lighter) */}
        <path d="M -20 184 L 50 80 L 120 184 Z" fill="url(#mountainBack)" />
        <path d="M 80 184 L 180 60 L 280 184 Z" fill="url(#mountainBack)" />

        {/* Mid Mountains */}
        <path d="M 40 184 L 130 90 L 220 184 Z" fill="url(#mountainMid)" />
        <path d="M 160 184 L 240 110 L 300 184 Z" fill="url(#mountainMid)" />

        {/* Front Mountains (Darkest) */}
        <path d="M -40 184 L 80 110 L 180 184 Z" fill="url(#mountainFront)" />
        <path d="M 100 184 L 180 130 L 270 184 Z" fill="url(#mountainFront)" />

        {/* Pine Trees Silhouette in foreground */}
        <g fill="#1d2d44">
           {/* Tree 1 */}
           <path d="M 20 184 L 25 150 L 30 184 Z" />
           <path d="M 15 184 L 25 140 L 35 184 Z" opacity="0.8" />
           {/* Tree 2 */}
           <path d="M 50 184 L 55 160 L 60 184 Z" />
           <path d="M 45 184 L 55 155 L 65 184 Z" opacity="0.8" />
           {/* Tree 3 */}
           <path d="M 230 184 L 235 145 L 240 184 Z" />
           <path d="M 225 184 L 235 135 L 245 184 Z" opacity="0.8" />
        </g>
        
        {/* Inner shadow over canvas to give depth to the frame */}
        <rect x="0" y="0" width="264" height="184" fill="url(#frameInnerShadow)" pointerEvents="none" />
      </svg>
    </svg>
  );
};
