import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CreativeRoomCSS from './components/CreativeRoomCSS';
import ApologyLetter from './components/ApologyLetter';
import './App.css';

function App() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="app-container">
      <CreativeRoomCSS onInteract={() => setIsZoomed(true)} />
      
      <AnimatePresence>
        {isZoomed && (
          <ApologyLetter onClose={() => setIsZoomed(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
