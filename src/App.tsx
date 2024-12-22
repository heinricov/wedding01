import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Cover } from './components/sections/Cover';
import { Hero } from './components/sections/Hero';
import { BrideGroom } from './components/sections/BrideGroom';
import { DateTimeLocation } from './components/sections/DateTimeLocation';
import { History } from './components/sections/History';
import { Gallery } from './components/sections/Gallery';
import { Gift } from './components/sections/Gift';
import { RSVP } from './components/sections/RSVP';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {!isOpen && <Cover onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      <MusicPlayer isVisible={isOpen} />

      {isOpen && (
        <div className="overflow-x-hidden">
          <Hero />
          <BrideGroom />
          <DateTimeLocation />
          <History />
          <Gallery />
          <Gift />
          <RSVP />
        </div>
      )}
    </div>
  );
}

export default App;