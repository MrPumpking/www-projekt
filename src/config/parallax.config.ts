import { ScreenSize } from '@/hooks/useScreenSize';
import { ParallaxLayerProps } from '@react-spring/parallax';

export enum Layer {
  MARUDERS_BG = 'MARUDERS_BG',
  MARUDERS_HERO = 'MARUDERS_HERO',
  MARUDERS_TEXT = 'MARUDERS_TEXT',
  DEMENTORS_BG = 'DEMENTORS_BG',
  DEMENTORS_PATRONUS = 'DEMENTORS_PATRONUS',
  DEMENTORS_TEXT = 'DEMENTORS_TEXT',
  KINGCROSS_BG = 'KINGSCROSS_BG',
  KINGSCROSS_HAGRID = 'KINGSCROSS_HAGRID',
  KINGSCROSS_TEXT = 'KINGSCROSS_TEXT',
  HUFFLEPUFF_BG = 'HUFFLEPUFF_BG',
  HUFFLEPUFF_HOGWARTS = 'HUFFLEPUFF_HOGWARTS',
  HUFFLEPUFF_TEXT = 'HUFFLEPUFF_TEXT',
  DAILYPROPHET_BG = 'DAILYPROPHET_BG',
  DAILYPROPHET_WAND = 'DAILYPROPHET_WAND',
  DAILYPROPHET_TEXT = 'DAILYPROPHET_TEXT',
}

export const ParallaxConfig: Record<
  ScreenSize,
  Record<Layer, ParallaxLayerProps> & { pages: number }
> = {
  [ScreenSize.xs]: {
    pages: 7,
    [Layer.MARUDERS_BG]: {
      offset: 0,
      speed: 0.3,
      factor: 0.45,
    },
    [Layer.MARUDERS_HERO]: {
      offset: 0.2,
      speed: 0.5,
    },
    [Layer.MARUDERS_TEXT]: {
      offset: 0.4,
      speed: 0.1,
    },
    [Layer.DEMENTORS_BG]: {
      offset: 1.4,
      speed: 0.3,
      factor: 0.45,
    },
    [Layer.DEMENTORS_PATRONUS]: {
      offset: 1.6,
      speed: 0.7,
    },
    [Layer.DEMENTORS_TEXT]: {
      offset: 1.8,
      speed: 0.1,
    },
    [Layer.KINGCROSS_BG]: {
      offset: 2.6,
      factor: 0.3,
      speed: 0.3,
    },
    [Layer.KINGSCROSS_HAGRID]: {
      offset: 2.7,
      speed: 0.5,
    },
    [Layer.KINGSCROSS_TEXT]: {
      offset: 2.85,
      speed: 0.1,
    },
    [Layer.HUFFLEPUFF_BG]: {
      offset: 3.75,
      factor: 0.4,
      speed: 0.3,
    },
    [Layer.HUFFLEPUFF_HOGWARTS]: {
      offset: 3.9,
      speed: 0.2,
    },
    [Layer.HUFFLEPUFF_TEXT]: {
      offset: 4,
      speed: 0.1,
    },
    [Layer.DAILYPROPHET_BG]: {
      offset: 5.1,
      factor: 0.3,
      speed: 0.3,
    },
    [Layer.DAILYPROPHET_WAND]: {
      offset: 5.1,
      speed: 0.6,
    },
    [Layer.DAILYPROPHET_TEXT]: {
      offset: 5.4,
      speed: 0.1,
    },
  },
  [ScreenSize.s]: {
    pages: 6,
    [Layer.MARUDERS_BG]: {
      offset: 0,
      speed: 0.3,
      factor: 0.5,
    },
    [Layer.MARUDERS_HERO]: {
      offset: 0.2,
      speed: 0.5,
    },
    [Layer.MARUDERS_TEXT]: {
      offset: 0.5,
      speed: 0.1,
    },
    [Layer.DEMENTORS_BG]: {
      offset: 1.3,
      speed: 0.3,
      factor: 0.5,
    },
    [Layer.DEMENTORS_PATRONUS]: {
      offset: 1.4,
      speed: 0.7,
    },
    [Layer.DEMENTORS_TEXT]: {
      offset: 1.7,
      speed: 0.1,
    },
    [Layer.KINGCROSS_BG]: {
      offset: 2.2,
      factor: 0.5,
      speed: 0.3,
    },
    [Layer.KINGSCROSS_HAGRID]: {
      offset: 2.4,
      speed: 0.5,
    },
    [Layer.KINGSCROSS_TEXT]: {
      offset: 2.65,
      speed: 0.1,
    },
    [Layer.HUFFLEPUFF_BG]: {
      offset: 3.3,
      factor: 0.4,
      speed: 0.3,
    },
    [Layer.HUFFLEPUFF_HOGWARTS]: {
      offset: 3.4,
      speed: 0.5,
    },
    [Layer.HUFFLEPUFF_TEXT]: {
      offset: 3.68,
      speed: 0.1,
    },
    [Layer.DAILYPROPHET_BG]: {
      offset: 4.6,
      factor: 0.5,
      speed: 0.3,
    },
    [Layer.DAILYPROPHET_WAND]: {
      offset: 4.6,
      speed: 0.6,
    },
    [Layer.DAILYPROPHET_TEXT]: {
      offset: 4.9,
      speed: 0.1,
    },
  },
  [ScreenSize.m]: {
    pages: 6,
    [Layer.MARUDERS_BG]: {
      offset: 0,
      speed: 0.3,
      factor: 0.5,
    },
    [Layer.MARUDERS_HERO]: {
      offset: 0.2,
      speed: 0.5,
    },
    [Layer.MARUDERS_TEXT]: {
      offset: 0.5,
      speed: 0.1,
    },
    [Layer.DEMENTORS_BG]: {
      offset: 1.3,
      speed: 0.3,
      factor: 0.5,
    },
    [Layer.DEMENTORS_PATRONUS]: {
      offset: 1.4,
      speed: 0.7,
    },
    [Layer.DEMENTORS_TEXT]: {
      offset: 1.7,
      speed: 0.1,
    },
    [Layer.KINGCROSS_BG]: {
      offset: 2.2,
      factor: 0.5,
      speed: 0.3,
    },
    [Layer.KINGSCROSS_HAGRID]: {
      offset: 2.4,
      speed: 0.5,
    },
    [Layer.KINGSCROSS_TEXT]: {
      offset: 2.65,
      speed: 0.1,
    },
    [Layer.HUFFLEPUFF_BG]: {
      offset: 3.3,
      factor: 0.5,
      speed: 0.3,
    },
    [Layer.HUFFLEPUFF_HOGWARTS]: {
      offset: 3.4,
      speed: 0.5,
    },
    [Layer.HUFFLEPUFF_TEXT]: {
      offset: 3.75,
      speed: 0.1,
    },
    [Layer.DAILYPROPHET_BG]: {
      offset: 4.7,
      factor: 0.5,
      speed: 0.3,
    },
    [Layer.DAILYPROPHET_WAND]: {
      offset: 4.7,
      speed: 0.6,
    },
    [Layer.DAILYPROPHET_TEXT]: {
      offset: 5,
      speed: 0.1,
    },
  },
  [ScreenSize.l]: {
    pages: 6,
    [Layer.MARUDERS_BG]: {
      offset: 0,
      speed: 0.3,
      factor: 0.6,
    },
    [Layer.MARUDERS_HERO]: {
      offset: 0.3,
      speed: 0.5,
    },
    [Layer.MARUDERS_TEXT]: {
      offset: 0.6,
      speed: 0.1,
    },
    [Layer.DEMENTORS_BG]: {
      offset: 1.4,
      speed: 0.3,
      factor: 0.6,
    },
    [Layer.DEMENTORS_PATRONUS]: {
      offset: 1.7,
      speed: 0.7,
    },
    [Layer.DEMENTORS_TEXT]: {
      offset: 1.9,
      speed: 0.1,
    },
    [Layer.KINGCROSS_BG]: {
      offset: 2.4,
      factor: 0.6,
      speed: 0.3,
    },
    [Layer.KINGSCROSS_HAGRID]: {
      offset: 2.65,
      speed: 0.5,
    },
    [Layer.KINGSCROSS_TEXT]: {
      offset: 2.9,
      speed: 0.1,
    },
    [Layer.HUFFLEPUFF_BG]: {
      offset: 3.5,
      factor: 0.6,
      speed: 0.3,
    },
    [Layer.HUFFLEPUFF_HOGWARTS]: {
      offset: 3.7,
      speed: 0.5,
    },
    [Layer.HUFFLEPUFF_TEXT]: {
      offset: 3.99,
      speed: 0.1,
    },
    [Layer.DAILYPROPHET_BG]: {
      offset: 4.8,
      factor: 0.6,
      speed: 0.3,
    },
    [Layer.DAILYPROPHET_WAND]: {
      offset: 4.8,
      speed: 0.6,
    },
    [Layer.DAILYPROPHET_TEXT]: {
      offset: 5.2,
      speed: 0.1,
    },
  },
  [ScreenSize.xl]: {
    pages: 8,
    [Layer.MARUDERS_BG]: {
      offset: 0,
      speed: 0.3,
      factor: 0.6,
    },
    [Layer.MARUDERS_HERO]: {
      offset: 0.3,
      speed: 0.5,
    },
    [Layer.MARUDERS_TEXT]: {
      offset: 0.6,
      speed: 0.1,
    },
    [Layer.DEMENTORS_BG]: {
      offset: 1.7,
      speed: 0.3,
      factor: 0.6,
    },
    [Layer.DEMENTORS_PATRONUS]: {
      offset: 1.99,
      speed: 0.7,
    },
    [Layer.DEMENTORS_TEXT]: {
      offset: 2.1,
      speed: 0.1,
    },
    [Layer.KINGCROSS_BG]: {
      offset: 3,
      factor: 0.6,
      speed: 0.3,
    },
    [Layer.KINGSCROSS_HAGRID]: {
      offset: 3.2,
      speed: 0.5,
    },
    [Layer.KINGSCROSS_TEXT]: {
      offset: 3.6,
      speed: 0.1,
    },
    [Layer.HUFFLEPUFF_BG]: {
      offset: 4.6,
      factor: 0.6,
      speed: 0.3,
    },
    [Layer.HUFFLEPUFF_HOGWARTS]: {
      offset: 4.7,
      speed: 0.5,
    },
    [Layer.HUFFLEPUFF_TEXT]: {
      offset: 5,
      speed: 0.1,
    },
    [Layer.DAILYPROPHET_BG]: {
      offset: 6,
      factor: 0.6,
      speed: 0.3,
    },
    [Layer.DAILYPROPHET_WAND]: {
      offset: 6.2,
      speed: 0.6,
    },
    [Layer.DAILYPROPHET_TEXT]: {
      offset: 6.6,
      speed: 0.1,
    },
  },
};
