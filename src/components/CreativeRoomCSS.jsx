import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import BouquetSVG from './SVGArt/BouquetSVG';
import ArtSuppliesSVG from './SVGArt/ArtSuppliesSVG';
import CoffeeMugSVG from './SVGArt/CoffeeMugSVG';
import OpenBookSVG from './SVGArt/OpenBookSVG';
import PaintPaletteSVG from './SVGArt/PaintPaletteSVG';
import { LandscapePaintingSVG } from './SVGArt/PaintingsSVG';
import BulletinBoardSVG from './SVGArt/BulletinBoardSVG';
import WallStickersSVG from './SVGArt/WallStickersSVG';
import FairyLightsSVG from './SVGArt/FairyLightsSVG';
import './CreativeRoomCSS.css';

const CreativeRoomCSS = ({ onInteract }) => {
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const rotateY = useTransform(smoothX, [-1, 1], [-6, 6]);
  const rotateX = useTransform(smoothY, [-1, 1], [4, -4]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = (e.clientY - rect.top) / rect.height * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className="true-3d-viewport" ref={containerRef} onMouseMove={handleMouseMove}>
      <motion.div className="room-scene" style={{ rotateX, rotateY }}>
        
        {/* ENCOMPASSING WALL */}
        <div className="wall-plane">
          <div className="wallpaper-pattern"></div>
          
          {/* Aesthetic Wall Elements */}
          <WallStickersSVG className="svg-wall-stickers" />
          <FairyLightsSVG className="svg-fairy-lights" />
          
          {/* Paintings and Board */}
          <LandscapePaintingSVG className="painting-svg p-landscape" />
          <BulletinBoardSVG className="painting-svg p-bulletin" />
          
          <div className="sunlight-beam"></div>
        </div>

        {/* ENCOMPASSING DESK */}
        <div className="desk-plane">
          <div className="wood-texture"></div>
          
          <div className="desk-items-container">
            <BouquetSVG className="svg-bouquet" />
            <ArtSuppliesSVG className="svg-supplies" />
            <PaintPaletteSVG className="svg-paint-palette" />
            <OpenBookSVG className="svg-open-book" />
            
            <div className="svg-coffee-mug">
              <CoffeeMugSVG />
              <div className="steam s1"></div>
              <div className="steam s2"></div>
            </div>

            {/* Glowing Envelope Hotspot */}
            <motion.div 
              className="envelope-hotspot-3d"
              onClick={onInteract}
              whileHover={{ scale: 1.02, translateZ: 15 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="envelope-closed">
                 <div className="envelope-seal"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreativeRoomCSS;
