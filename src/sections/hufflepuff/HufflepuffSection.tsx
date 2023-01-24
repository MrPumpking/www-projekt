import { Container } from '@/components/container/Container';
import { Paragraph } from '@/components/text/Paragraph';
import { TextSection } from '@/components/text/TextSection';
import { Layer } from '@/config/parallax.config';
import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import type { FC } from 'react';
import { useParallaxConfig } from '../useParallaxConfig';
import { useSectionListener } from '../useSectionListener';
import coverImg from './img/cover.webp';
import hogwartsImg from './img/hogwarts.png';

export const HufflepuffSection: FC = () => {
  const { ref } = useSectionListener('hufflepuff');
  const { config, size } = useParallaxConfig();

  return (
    <>
      <ParallaxLayer
        key={`hufflepuff-bg-${size}`}
        {...config[Layer.HUFFLEPUFF_BG]}
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
        key={`hufflepuff-hogwarts-${size}`}
        {...config[Layer.HUFFLEPUFF_HOGWARTS]}
      >
        <Container className="grid place-items-center">
          <Image
            priority
            width={1300}
            src={hogwartsImg}
            alt="Hero"
            className="drop-shadow-2xl"
          />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        key={`hufflepuff-text-${size}`}
        className="bg-bg"
        {...config[Layer.HUFFLEPUFF_TEXT]}
      >
        <TextSection title="Hufflepuff Common Room">
          <Paragraph>
            The Hufflepuff common room is entered from the same corridor as the
            Hogwarts kitchens. Proceeding past the large still life that forms
            the entrance to the latter, a pile of large barrels is to be found
            stacked in a shadowy stone recess on the right-hand side of the
            corridor.
          </Paragraph>
          <Paragraph>
            The Hufflepuff common room is entered from the same corridor as the
            Hogwarts kitchens. Proceeding past the large still life that forms
            the entrance to the latter, a pile of large barrels is to be found
            stacked in a shadowy stone recess on the right-hand side of the
            corridor. The barrel two from the bottom, middle of the second row,
            will open if tapped in the rhythm of ‘Helga Hufflepuff’. As a
            security device to repel non-Hufflepuffs, tapping on the wrong
            barrel, or tapping the incorrect number of times, results in one of
            the other lids bursting off and drenching the interloper in vinegar.
          </Paragraph>
          <Paragraph>
            A sloping, earthy passage inside the barrel travels upwards a little
            way until a cosy, round, low-ceilinged room is revealed, reminiscent
            of a badger’s sett. The room is decorated in the cheerful, bee-like
            colours of yellow and black, emphasised by the use of highly
            polished, honey-coloured wood for the tables and the round doors
            which lead to the boys’ and girls’ dormitories (furnished with
            comfortable wooden bedsteads, all covered in patchwork quilts).
          </Paragraph>
          <Paragraph>
            A colourful profusion of plants and flowers seem to relish the
            atmosphere of the Hufflepuff common room: various cactii stand on
            wooden circular shelves (curved to fit the walls), many of them
            waving and dancing at passers-by, while copper-bottomed plant
            holders dangling amid the ceiling cause tendrils of ferns and ivies
            to brush your hair as you pass under them.
          </Paragraph>
          <Paragraph>
            A portrait over the wooden mantelpiece (carved all over with
            decorative dancing badgers) shows Helga Hufflepuff, one of the four
            founders of Hogwarts School, toasting her students with a tiny,
            two-handled golden cup. Small, round windows just level with the
            ground at the foot of the castle show a pleasant view of rippling
            grass and dandelions, and, occasionally, passing feet. These low
            windows notwithstanding, the room feels perennially sunny.
          </Paragraph>
        </TextSection>
      </ParallaxLayer>
    </>
  );
};
