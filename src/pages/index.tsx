import { Navbar } from '@/components/navbar/Navbar';
import { OffCanvas } from '@/components/offcanvas/OffCanvas';
import { OffCanvasProvider } from '@/components/offcanvas/useOffCanvas';
import type { FC } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { IntroSection } from '@/sections/intro/IntroSection';

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
    <Parallax pages={2} style={{ top: '0', left: '0' }}>
      <IntroSection />
      <ParallaxLayer offset={1.2} speed={2.5} style={{ background: 'blue' }}>
        <p>parallax 2</p>
      </ParallaxLayer>
    </Parallax>
  );
};

export default LandingPage;
