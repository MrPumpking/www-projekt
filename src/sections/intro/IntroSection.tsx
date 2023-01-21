import { Container } from '@/components/container/Container';
import { Paragraph } from '@/components/text/Paragraph';
import { TextSection } from '@/components/text/TextSection';
import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import type { FC } from 'react';
import coverImg from './img/cover.webp';
import heroImg from './img/hero.png';

export const IntroSection: FC = () => {
  return (
    <>
      <ParallaxLayer offset={0} factor={0.6} speed={0.5}>
        <Image
          fill
          priority
          src={coverImg}
          alt="Intro cover"
          className="object-cover"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} factor={0.2} speed={1.5}>
        <Container className="grid place-items-center">
          <Image
            priority
            width={900}
            src={heroImg}
            alt="Hero"
            className="drop-shadow-2xl"
          />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={2} className="bg-bg">
        <TextSection title="The Marauder’s Map">
          <Paragraph>
            Perhaps no students (even including Harry Potter, Ron Weasley,
            Hermione Granger and Tom Riddle) have ever explored the castle and
            grounds of Hogwarts as thoroughly and illicitly as the four creators
            and contributors to the Marauder’s Map: James Potter, Sirius Black,
            Remus Lupin and Peter Pettigrew.
          </Paragraph>
          <Paragraph>
            James, Sirius and Peter were not initially impelled to explore the
            school grounds by night out of devilment alone (though that played
            its part), but by their desire to help their dear friend Remus Lupin
            to bear his lycanthropy. Prior to the invention of the Wolfsbane
            Potion, Lupin was compelled to undergo an excruciating
            transformation every full moon. Once his condition was discovered by
            his three best friends, they sought a way to render his
            transformations less solitary and painful, which led to them
            learning to become (unregistered) Animagi, so that they could keep
            him company without harm to themselves. The ability of Sirius Black,
            Peter Pettigrew and James Potter to become, respectively, a dog, a
            rat and a stag, enabled them to explore the castle grounds by night
            undetected. The interior of the castle, meanwhile, was mapped over
            time with the help of James Potter’s Invisibility Cloak.
          </Paragraph>
          <Paragraph>
            The Marauder’s Map is lasting testimony to the advanced magical
            ability of the four friends who included Harry Potter’s father,
            godfather and favourite teacher. The map they created during their
            time at Hogwarts appears to be a blank piece of parchment unless
            activated by the phrase: ‘I solemnly swear that I am up to no good,’
            a phrase that, in the case of three of the four makers, should be
            understood as a joke. The ‘no good’ of which they wrote never
            denoted Dark magic, but school rule-breaking; similar bravado is
            evinced by their use of their own nicknames on the map (‘Messrs
            Moony, Wormtail, Padfoot and Prongs’).
          </Paragraph>
          <Paragraph>
            The magic used in the map’s creation is advanced and impressive; it
            includes the Homonculous Charm, enabling the possessor of the map to
            track the movements of every person in the castle, and it was also
            enchanted to forever repel (as insultingly as possible) the
            curiosity of their nemesis, Severus Snape.
          </Paragraph>
        </TextSection>
      </ParallaxLayer>
    </>
  );
};
