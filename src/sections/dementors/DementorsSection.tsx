import { Paragraph } from '@/components/text/Paragraph';
import { TextSection } from '@/components/text/TextSection';
import { Layer } from '@/config/parallax.config';
import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import type { FC } from 'react';
import { useParallaxConfig } from '../useParallaxConfig';
import { useSectionListener } from '../useSectionListener';
import coverImg from './img/cover.webp';
import dementorImg from './img/dementor.png';
import patronusImg from './img/patronus.png';

export const DementorsSection: FC = () => {
  const { ref } = useSectionListener('dementors');
  const { config, size } = useParallaxConfig();

  return (
    <>
      <ParallaxLayer
        key={`dementors-bg-${size}`}
        {...config[Layer.DEMENTORS_BG]}
      >
        <Image
          ref={ref}
          fill
          src={coverImg}
          alt="Intro cover"
          className="object-cover"
          placeholder="blur"
        />
      </ParallaxLayer>
      <ParallaxLayer
        key={`dementors-patronus-${size}`}
        {...config[Layer.DEMENTORS_PATRONUS]}
      >
        <div className="pl-32">
          <Image
            width={400}
            src={patronusImg}
            alt="Patronus"
            className="drop-shadow-2xl"
            placeholder="blur"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        key={`doementors-dementor-${size}`}
        {...config[Layer.DEMENTORS_DEMENTOR]}
      >
        <div className="flex justify-end pr-32">
          <Image
            width={600}
            src={dementorImg}
            alt="Dementor"
            className="drop-shadow-2xl"
            placeholder="blur"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        key={`dementors-text-${size}`}
        className="bg-bg"
        {...config[Layer.DEMENTORS_TEXT]}
      >
        <TextSection title="Dementors and Chocolate">
          <Paragraph>
            The mood-enhancing properties of chocolate are well known in both
            the Muggle and wizard worlds. Chocolate is the perfect antidote for
            anyone who has been overcome in the presence of Dementors, which
            suck hope and happiness out of their surroundings.
          </Paragraph>
          <Paragraph>
            Chocolate can only be a short-term remedy, however. Finding ways to
            fight off Dementors – or depression – are essential if one is to
            become permanently happier. Excessive chocolate consumption cannot
            benefit either Muggle or wizard.
          </Paragraph>
          <Paragraph>
            Although the precise circumstances surrounding the makers’ loss of
            their map are not given in the Harry Potter novels, it is easy to
            conclude that they eventually over-reached themselves and were
            cornered by Argus Filch, probably on a tip-off from Snape, whose
            obsession it had become to expose his arch-rival, James Potter, in
            wrongdoing. The masterpiece of a map was confiscated in Sirius,
            James, Remus and Peter’s final year and none of them were able to
            steal it back from a well-prepared and suspicious Filch. In any
            case, their priorities changed in their final months at school,
            becoming far more serious and focused on the world beyond Hogwarts,
            where Lord Voldemort was successfully rising to power. All four of
            the map’s creators would shortly be inducted into the renegade
            organisation headed by Albus Dumbledore, the Order of the Phoenix,
            and a map of their old school – no matter how ingenious – would no
            longer be of use to them except as a piece of nostalgia.
          </Paragraph>
        </TextSection>
      </ParallaxLayer>
    </>
  );
};
