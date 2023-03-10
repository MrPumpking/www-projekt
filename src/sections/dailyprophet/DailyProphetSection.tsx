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
import wandImg from './img/wand.webp';

export const DailyProphetSection: FC = () => {
  const { ref } = useSectionListener('dailyprophet');
  const { config, size } = useParallaxConfig();

  return (
    <>
      <ParallaxLayer
        key={`dailyprophet-bg-${size}`}
        {...config[Layer.DAILYPROPHET_BG]}
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
        key={`dailyprophet-wand-${size}`}
        {...config[Layer.DAILYPROPHET_WAND]}
      >
        <Container className="grid place-items-center">
          <Image
            priority
            width={700}
            src={wandImg}
            alt="Hero"
            className="drop-shadow-2xl"
          />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        key={`dailyprophet-text-${size}`}
        className="bg-bg"
        {...config[Layer.DAILYPROPHET_TEXT]}
      >
        <TextSection title="The Daily Prophet">
          <Paragraph>
            There is only one wizarding newspaper in Britain, discounting such
            small circulation publications such as The Quibbler. The Daily
            Prophet, whose headquarters are in Diagon Alley, is delivered by owl
            on a daily basis to nearly every wizarding household in Britain.
            Payment is effected by placing coins in the pouch tied to the
            paper-owl’s leg. Occasionally (when something particularly
            interesting or exciting happens, such as the illegal flight of a
            Ford Anglia the length of Britain) an *Evening Prophet* edition will
            be rushed out.
          </Paragraph>
          <Paragraph>
            The Prophet is not an entirely unbiased source of news, and
            sometimes displays an unfortunately sensationalist tendency best
            epitomised by star reporter Rita Skeeter. Ostensibly an independent
            news source, it has more than once been influenced by the Ministry
            (or ruling power) of the day to hush up certain stories. A clue to
            its overriding motivation may be found in its name, ‘prophet’ being
            a homonym of ‘profit’ (although I was also taken with the idea of a
            wizarding newspaper claiming foreknowledge of news to come).
          </Paragraph>
          <Paragraph>
            Wizardkind tends not to require alternative political flavours in
            its news coverage (which is not to say, however, that the Prophet
            does not have a political agenda). As a small, outsider and
            occasionally beleaguered community, wizards are, by and large,
            interested in the same kinds of stories: the Quidditch League
            results, whether anyone is in trouble for infractions of the
            International Statute of Secrecy, what irritating legislation the
            Misuse of Muggle Artefacts Office has come up with now, and when the
            next Celestina Warbeck/Weird Sisters concert will take place.
          </Paragraph>
          <Paragraph>
            It seems likely that wizards will continue to favour old-fashioned
            newsprint, even while the Muggle world resorts increasingly to the
            internet. If Muggle newspapers had moving photographs, their
            circulation might be similarly buoyant.
          </Paragraph>
        </TextSection>
      </ParallaxLayer>
    </>
  );
};
