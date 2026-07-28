import React from 'react';

const BouquetSVG = ({ className }) => {
  return (
    <svg viewBox="0 0 150 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="flowerCenterYellow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffee58" />
          <stop offset="70%" stopColor="#fbc02d" />
          <stop offset="100%" stopColor="#f57f17" />
        </radialGradient>
        <radialGradient id="peonyPink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffcce0" />
          <stop offset="60%" stopColor="#ff99cc" />
          <stop offset="100%" stopColor="#ff66b2" />
        </radialGradient>
        <radialGradient id="peonyDarkPink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff99cc" />
          <stop offset="100%" stopColor="#ff3399" />
        </radialGradient>
        <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8fbc8f" />
          <stop offset="100%" stopColor="#556b2f" />
        </linearGradient>
        <linearGradient id="vaseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
        </linearGradient>
      </defs>

      {/* Background Stems */}
      <path d="M 75 140 Q 60 180 75 200" fill="none" stroke="url(#stemGrad)" strokeWidth="4" />
      <path d="M 75 140 Q 90 180 75 200" fill="none" stroke="url(#stemGrad)" strokeWidth="3" />
      <path d="M 75 140 Q 75 180 75 200" fill="none" stroke="url(#stemGrad)" strokeWidth="3.5" />

      {/* Daisy 1 (Top Left) */}
      <g transform="translate(25, 40) scale(0.8)">
        <path d="M 75 140 Q 75 80 75 75" fill="none" stroke="url(#stemGrad)" strokeWidth="4" />
        <g fill="#ffffff" stroke="#e6e6e6" strokeWidth="0.5">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => (
            <ellipse key={angle} cx="75" cy="50" rx="8" ry="25" transform={`rotate(${angle} 75 75)`} />
          ))}
        </g>
        <circle cx="75" cy="75" r="12" fill="url(#flowerCenterYellow)" />
      </g>

      {/* Daisy 2 (Center Right) */}
      <g transform="translate(85, 60) scale(0.9)">
        <path d="M 75 140 Q 75 80 75 75" fill="none" stroke="url(#stemGrad)" strokeWidth="4" />
        <g fill="#ffffff" stroke="#e6e6e6" strokeWidth="0.5">
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map(angle => (
            <ellipse key={angle} cx="75" cy="50" rx="8" ry="25" transform={`rotate(${angle} 75 75)`} />
          ))}
        </g>
        <circle cx="75" cy="75" r="12" fill="url(#flowerCenterYellow)" />
      </g>

      {/* Peony (Center Bottom) */}
      <g transform="translate(60, 80) scale(1)">
        <path d="M 75 140 Q 75 80 75 75" fill="none" stroke="url(#stemGrad)" strokeWidth="4" />
        
        {/* Outer dark pink petals */}
        <g fill="url(#peonyDarkPink)" opacity="0.9">
          {[0, 72, 144, 216, 288].map(angle => (
            <circle key={angle} cx="75" cy="55" r="20" transform={`rotate(${angle} 75 75)`} />
          ))}
        </g>
        {/* Mid pink petals */}
        <g fill="url(#peonyPink)" opacity="0.95">
          {[36, 108, 180, 252, 324].map(angle => (
            <circle key={angle} cx="75" cy="60" r="18" transform={`rotate(${angle} 75 75)`} />
          ))}
        </g>
        {/* Inner light pink petals */}
        <g fill="#ffcce0">
          {[18, 90, 162, 234, 306].map(angle => (
            <circle key={angle} cx="75" cy="65" r="12" transform={`rotate(${angle} 75 75)`} />
          ))}
        </g>
        <circle cx="75" cy="75" r="8" fill="url(#flowerCenterYellow)" />
      </g>

      {/* Glass Vase */}
      <path d="M 50 140 L 100 140 L 95 200 Q 75 210 55 200 Z" fill="url(#vaseGrad)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
      {/* Water inside vase */}
      <path d="M 52 160 L 98 160 L 95 198 Q 75 205 55 198 Z" fill="rgba(173, 216, 230, 0.3)" />
      {/* Vase Rim */}
      <ellipse cx="75" cy="140" rx="25" ry="5" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
    </svg>
  );
};

export default BouquetSVG;
