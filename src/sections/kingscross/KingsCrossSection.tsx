import { Paragraph } from '@/components/text/Paragraph';
import { TextSection } from '@/components/text/TextSection';
import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import type { FC } from 'react';
import { useSectionListener } from '../useSectionListener';
import coverImg from './img/cover.webp';
// import heroImg from './img/hero.png';

export const KingsCrossSection: FC = () => {
  const { ref } = useSectionListener('kingscross');

  return (
    <>
      <ParallaxLayer offset={2.4} factor={0.6} speed={0.3}>
        <Image
          ref={ref}
          fill
          src={coverImg}
          alt="Intro cover"
          className="object-cover"
          placeholder="blur"
        />
      </ParallaxLayer>
      {/* <ParallaxLayer offset={0.3} speed={0.5}>
        <Container className="grid place-items-center">
          <Image
            priority
            width={900}
            src={heroImg}
            alt="Hero"
            className="drop-shadow-2xl"
          />
        </Container>
      </ParallaxLayer> */}
      <ParallaxLayer offset={2.9} speed={0.1} className="bg-bg">
        <TextSection title="King’s Cross Station">
          <Paragraph>
            When Ottaline Gambol commandeered a Muggle train to serve as the new
            mode of transport for Hogwarts students, she also had constructed a
            small station in the wizarding village of Hogsmeade: a necessary
            adjunct to the train. The Ministry of Magic felt strongly, however,
            that to construct an additional wizarding station in the middle of
            London would stretch even the Muggles’ notorious determination not
            to notice magic when it was exploding in front of their faces.
          </Paragraph>
          <Paragraph>
            It was Evangeline Orpington, Minister from 1849-1855, who hit upon
            the solution of adding a concealed platform at the newly (Muggle)
            built King’s Cross station, which would be accessible only to
            witches and wizards. On the whole, this has worked well, although
            there have been minor problems over the ensuing years, such as
            witches and wizards who have dropped suitcases full of biting
            spellbooks or newt spleens all over the polished station floor, or
            else disappeared through the solid barrier a little too loudly.
            There are usually a number of plain-clothed Ministry of Magic
            employees on hand to deal with any inconvenient Muggle memories that
            may need altering at the start and end of each Hogwarts term.
          </Paragraph>
          <Paragraph>
            King’s Cross, which is one of London’s main railway stations, has a
            very personal significance for me, because my parents met on a train
            to Scotland which departed from King’s Cross station. For this
            reason, and because it has such an evocative and symbolic name, and
            because it is actually the right station to leave from if you were
            heading to Caledonia, I never knew the slightest indecision about
            the location of the portal that would take Harry to Hogwarts, or the
            means of transport that would take him there.
          </Paragraph>
        </TextSection>
      </ParallaxLayer>
    </>
  );
};
