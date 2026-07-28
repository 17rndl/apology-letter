import React from 'react';

const BouquetSVG = ({ className }) => {
  // Generate curved paths for the vase ribs to give a 3D cylindrical effect
  const ribPaths = [];
  const numRibs = 20;
  for (let i = 0; i <= numRibs; i++) {
    const t = i / numRibs; // 0 to 1
    // X positions curve along the cylinder. We use a sine distribution for 3D spacing.
    const angle = Math.PI * t; 
    const xDist = -Math.cos(angle); // -1 to 1
    
    // Top rim is narrower (width 60), bottom is wider (width 120), middle is widest (width 160)
    // We create bezier control points to match the pear shape
    const topX = 100 + xDist * 30;
    const midX = 100 + xDist * 80;
    const botX = 100 + xDist * 55;
    
    ribPaths.push(`M ${topX} 200 C ${midX} 260, ${midX} 320, ${botX} 380`);
  }

  return (
    <svg viewBox="0 0 200 420" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <filter id="shadowGround">
          <feDropShadow dx="0" dy="20" stdDeviation="10" floodColor="#000" floodOpacity="0.4" />
        </filter>
        <filter id="flowerDrop">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.2" />
        </filter>
        <filter id="petalShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.3" />
        </filter>
        <filter id="vaseShadow">
          <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.25" />
        </filter>

        {/* Vase Gradients (Dusty pinkish-grey ceramic) */}
        <linearGradient id="vaseBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#bcaaa4" />
          <stop offset="20%" stopColor="#d7ccc8" />
          <stop offset="80%" stopColor="#a1887f" />
          <stop offset="100%" stopColor="#795548" />
        </linearGradient>

        <linearGradient id="vaseInside" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4e342e" />
          <stop offset="100%" stopColor="#8d6e63" />
        </linearGradient>

        {/* Tulip Petal Gradients */}
        <linearGradient id="tulipPurple" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#fff9c4" /> {/* Pale Yellow base */}
          <stop offset="40%" stopColor="#f8bbd0" /> {/* Pink mid */}
          <stop offset="90%" stopColor="#ce93d8" /> {/* Purple tip */}
          <stop offset="100%" stopColor="#ba68c8" />
        </linearGradient>

        <linearGradient id="tulipPink" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#fff9c4" />
          <stop offset="40%" stopColor="#ff80ab" />
          <stop offset="100%" stopColor="#f50057" />
        </linearGradient>

        {/* Spray Rose Gradients */}
        <radialGradient id="rosePink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff5252" />
          <stop offset="60%" stopColor="#ff8a80" />
          <stop offset="100%" stopColor="#c62828" />
        </radialGradient>

        {/* Foliage Gradients */}
        <linearGradient id="tulipLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81c784" />
          <stop offset="50%" stopColor="#4caf50" />
          <stop offset="100%" stopColor="#2e7d32" />
        </linearGradient>
        
        <linearGradient id="stemDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#388e3c" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>
      </defs>

      {/* Grounding Contact Shadow */}
      <ellipse cx="100" cy="385" rx="55" ry="12" fill="rgba(0,0,0,0.5)" filter="url(#shadowGround)" />

      {/* --- THE FLOWERS --- */}
      <g>
        
        {/* Background Stems */}
        <path d="M 100 200 Q 110 150 160 90" fill="none" stroke="url(#stemDark)" strokeWidth="4" />
        <path d="M 100 200 Q 90 150 40 100" fill="none" stroke="url(#stemDark)" strokeWidth="5" />
        <path d="M 100 200 Q 130 130 140 60" fill="none" stroke="url(#stemDark)" strokeWidth="5" />
        <path d="M 100 200 Q 70 130 60 50" fill="none" stroke="url(#stemDark)" strokeWidth="6" />

        {/* Ferns / Greenery filler */}
        <g stroke="#1b5e20" strokeWidth="1.5" fill="none" opacity="0.8">
           <path d="M 120 180 L 150 140 M 130 165 L 155 155 M 125 175 L 145 165" />
           <path d="M 80 180 L 50 150 M 70 165 L 45 160 M 75 175 L 55 170" />
           <path d="M 130 130 L 170 120 M 140 125 L 165 110" />
        </g>

        {/* Broad Tulip Leaves */}
        <path d="M 100 200 C 60 160, 20 140, 10 90 C 20 120, 60 140, 80 180 Z" fill="url(#tulipLeaf)" />
        <path d="M 100 200 C 140 160, 180 130, 190 80 C 180 110, 140 140, 120 180 Z" fill="url(#tulipLeaf)" />
        <path d="M 90 190 C 70 120, 50 100, 40 70 C 60 90, 80 110, 85 180 Z" fill="url(#tulipLeaf)" opacity="0.9" />
        <path d="M 110 190 C 130 130, 150 110, 160 80 C 140 100, 120 120, 115 180 Z" fill="url(#tulipLeaf)" opacity="0.9" />

        {/* --- SPRAY ROSES (Clusters around the rim) --- */}
        <g>
          {/* Rose 1 (Left) */}
          <g transform="translate(45, 145) scale(0.6) rotate(-20)">
            <circle cx="0" cy="0" r="15" fill="url(#rosePink)" />
            <path d="M -10 -5 C -15 -20, 15 -20, 10 -5 Z" fill="#ff80ab" />
            <path d="M -12 5 C -25 -5, -5 -25, 0 -10 Z" fill="#ff4081" />
            <path d="M 12 5 C 25 -5, 5 -25, 0 -10 Z" fill="#ff4081" />
            <path d="M -8 10 C -15 25, 15 25, 8 10 Z" fill="#f50057" />
          </g>
          {/* Rose 2 (Right) */}
          <g transform="translate(155, 135) scale(0.65) rotate(15)">
            <circle cx="0" cy="0" r="15" fill="url(#rosePink)" />
            <path d="M -10 -5 C -15 -20, 15 -20, 10 -5 Z" fill="#ff80ab" />
            <path d="M -12 5 C -25 -5, -5 -25, 0 -10 Z" fill="#ff4081" />
            <path d="M 12 5 C 25 -5, 5 -25, 0 -10 Z" fill="#ff4081" />
            <path d="M -8 10 C -15 25, 15 25, 8 10 Z" fill="#f50057" />
          </g>
          {/* Rose 3 (Center Base) */}
          <g transform="translate(90, 160) scale(0.7)">
            <circle cx="0" cy="0" r="15" fill="url(#rosePink)" />
            <path d="M -10 -5 C -15 -20, 15 -20, 10 -5 Z" fill="#ff80ab" />
            <path d="M -12 5 C -25 -5, -5 -25, 0 -10 Z" fill="#ff4081" />
            <path d="M 12 5 C 25 -5, 5 -25, 0 -10 Z" fill="#ff4081" />
            <path d="M -8 10 C -15 25, 15 25, 8 10 Z" fill="#f50057" />
          </g>
          {/* Rose 4 (Mid-Right) */}
          <g transform="translate(130, 150) scale(0.55) rotate(-10)">
            <circle cx="0" cy="0" r="15" fill="url(#rosePink)" />
            <path d="M -10 -5 C -15 -20, 15 -20, 10 -5 Z" fill="#ff4081" />
            <path d="M -12 5 C -25 -5, -5 -25, 0 -10 Z" fill="#f50057" />
            <path d="M 12 5 C 25 -5, 5 -25, 0 -10 Z" fill="#f50057" />
            <path d="M -8 10 C -15 25, 15 25, 8 10 Z" fill="#c51162" />
          </g>
          {/* Small buds */}
          <ellipse cx="60" cy="165" rx="8" ry="12" fill="url(#rosePink)" transform="rotate(-40 60 165)" />
          <ellipse cx="170" cy="115" rx="7" ry="10" fill="url(#rosePink)" transform="rotate(30 170 115)" />
        </g>

        {/* --- TULIPS (Prominent, Foreground) --- */}
        <g>
          
          {/* Tulip 1 (Far Left, Pink, leaning out) */}
          <g transform="translate(45, 110) scale(0.9) rotate(-35)">
            {/* Back petals */}
            <path d="M 0 15 C -25 -5, -20 -35, -5 -45 C 5 -35, 10 -10, 0 15 Z" fill="#c51162" />
            <path d="M 0 15 C 25 -5, 20 -35, 5 -45 C -5 -35, -10 -10, 0 15 Z" fill="#c51162" />
            {/* Front petals */}
            <path d="M 0 20 C -20 0, -15 -40, 0 -50 C 15 -40, 20 0, 0 20 Z" fill="url(#tulipPink)" />
            {/* Front overlapping petal */}
            <path d="M 0 20 C -10 5, -5 -30, 0 -45 C 5 -30, 10 5, 0 20 Z" fill="#ff80ab" />
          </g>

          {/* Tulip 2 (Center Left, Purple) */}
          <g transform="translate(85, 95) scale(1) rotate(-10)">
            <path d="M 0 20 C -30 0, -25 -45, -10 -55 C 5 -40, 15 -15, 0 20 Z" fill="#8e24aa" />
            <path d="M 0 20 C 30 0, 25 -45, 10 -55 C -5 -40, -15 -15, 0 20 Z" fill="#8e24aa" />
            <path d="M 0 25 C -22 5, -20 -50, 0 -60 C 22 -50, 20 5, 0 25 Z" fill="url(#tulipPurple)" />
            <path d="M 0 25 C -12 10, -5 -45, 0 -55 C 5 -45, 12 10, 0 25 Z" fill="#f8bbd0" />
          </g>

          {/* Tulip 3 (Center Right, Tall, Purple) */}
          <g transform="translate(130, 70) scale(1.1) rotate(15)">
            <path d="M 0 20 C -30 0, -25 -45, -10 -55 C 5 -40, 15 -15, 0 20 Z" fill="#ab47bc" />
            <path d="M 0 20 C 30 0, 25 -45, 10 -55 C -5 -40, -15 -15, 0 20 Z" fill="#ab47bc" />
            <path d="M 0 25 C -22 5, -20 -50, 0 -60 C 22 -50, 20 5, 0 25 Z" fill="url(#tulipPurple)" />
            <path d="M 0 25 C -12 10, -5 -45, 0 -55 C 5 -45, 12 10, 0 25 Z" fill="#f8bbd0" opacity="0.9" />
          </g>

          {/* Tulip 4 (Far Right, Pink bud) */}
          <g transform="translate(170, 95) scale(0.7) rotate(25)">
            <path d="M 0 20 C -25 0, -20 -40, -5 -50 C 5 -40, 15 -10, 0 20 Z" fill="#c51162" />
            <path d="M 0 20 C 25 0, 20 -40, 5 -50 C -5 -40, -15 -10, 0 20 Z" fill="#c51162" />
            <path d="M 0 25 C -18 5, -15 -45, 0 -55 C 18 -45, 15 5, 0 25 Z" fill="url(#tulipPink)" />
          </g>

        </g>
      </g>

      {/* --- THE CERAMIC RIBBED VASE --- */}
      <g filter="url(#vaseShadow)">
        {/* Back Inside Rim */}
        <ellipse cx="100" cy="200" rx="35" ry="12" fill="url(#vaseInside)" />

        {/* The Vase Body Pear Silhouette */}
        <path d="M 65 200 C 65 260, 45 320, 50 380 C 55 400, 145 400, 150 380 C 155 320, 135 260, 135 200 Z" fill="url(#vaseBody)" />

        {/* Dynamic 3D Fluted Ribbing */}
        <g opacity="0.6">
          {ribPaths.map((pathStr, i) => (
            <g key={i}>
              {/* Shadow stroke on the left of the rib */}
              <path d={pathStr} fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" transform="translate(-1, 0)" />
              {/* Highlight stroke on the right of the rib */}
              <path d={pathStr} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" transform="translate(1, 0)" />
            </g>
          ))}
        </g>

        {/* Bottom Contact Rim Highlight */}
        <path d="M 50 380 C 55 395, 145 395, 150 380" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="3" />
        <path d="M 50 380 C 55 395, 145 395, 150 380" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" transform="translate(0, -2)" />

        {/* Front Top Rim */}
        <path d="M 65 200 A 35 12 0 0 0 135 200" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        
        {/* Subtle overall volumetric shading on vase edges to make it truly 3D */}
        <path d="M 65 200 C 65 260, 45 320, 50 380" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="6" opacity="0.5" filter="blur(2px)" />
        <path d="M 135 200 C 135 260, 155 320, 150 380" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="8" opacity="0.5" filter="blur(3px)" />
      </g>
    </svg>
  );
};

export default BouquetSVG;
