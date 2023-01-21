import { DailyProphetSection } from '@/sections/dailyprophet/DailyProphetSection';
import { DementorsSection } from '@/sections/dementors/DementorsSection';
import { HufflepuffSection } from '@/sections/hufflepuff/HufflepuffSection';
import { KingsCrossSection } from '@/sections/kingscross/KingsCrossSection';
import { MarudersMapSection } from '@/sections/maruders/MarudersMapSection';
import { Parallax } from '@react-spring/parallax';
import type { FC } from 'react';

const LandingPage: FC = () => {
  // return (
  //   <OffCanvasProvider>
  //     <div>
  //       <Navbar />
  //       <OffCanvas />
  //     </div>
  //   </OffCanvasProvider>
  // );

  return (
    <Parallax pages={6} style={{ top: '0', left: '0' }}>
      <MarudersMapSection />
      <DementorsSection />
      <KingsCrossSection />
      <HufflepuffSection />
      <DailyProphetSection />
    </Parallax>
  );
};

export default LandingPage;
