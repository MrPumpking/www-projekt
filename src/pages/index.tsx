import { MenuContextProvider } from '@/components/menu/useMenu';
import { Navbar } from '@/components/navbar/Navbar';
import { OffCanvas } from '@/components/offcanvas/OffCanvas';
import { OffCanvasProvider } from '@/components/offcanvas/useOffCanvas';
import { DailyProphetSection } from '@/sections/dailyprophet/DailyProphetSection';
import { DementorsSection } from '@/sections/dementors/DementorsSection';
import { HufflepuffSection } from '@/sections/hufflepuff/HufflepuffSection';
import { KingsCrossSection } from '@/sections/kingscross/KingsCrossSection';
import { MarudersMapSection } from '@/sections/maruders/MarudersMapSection';
import { IParallax, Parallax } from '@react-spring/parallax';
import { FC, useEffect, useRef } from 'react';

const LandingPage: FC = () => {
  const parallax = useRef<IParallax | null>(null);

  return (
    <MenuContextProvider parallax={parallax}>
      <OffCanvasProvider>
        <Navbar />
        <OffCanvas />
        <Parallax ref={parallax} pages={6} style={{ top: '0', left: '0' }}>
          <MarudersMapSection />
          <DementorsSection />
          <KingsCrossSection />
          <HufflepuffSection />
          <DailyProphetSection />
        </Parallax>
      </OffCanvasProvider>
    </MenuContextProvider>
  );
};

export default LandingPage;
