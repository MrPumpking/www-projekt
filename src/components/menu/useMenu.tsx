import { ScreenSize, useScreenSize } from '@/hooks/useScreenSize';
import { IParallax } from '@react-spring/parallax';
import {
  createContext,
  FC,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

interface MenuContextProps {
  activeSection: PageSection;
  setActiveSection(section: PageSection): void;
  parallax: MutableRefObject<IParallax | null>;
}

const MenuContext = createContext({} as MenuContextProps);

export const MenuContextProvider: FC<
  PropsWithChildren<Pick<MenuContextProps, 'parallax'>>
> = ({ parallax, children }) => {
  const [activeSection, setActiveSection] = useState<PageSection>('maruders');

  return (
    <MenuContext.Provider value={{ parallax, activeSection, setActiveSection }}>
      {children}
    </MenuContext.Provider>
  );
};

const SECTIONS = [
  'maruders',
  'dementors',
  'kingscross',
  'hufflepuff',
  'dailyprophet',
] as const;
export type PageSection = (typeof SECTIONS)[number];

const SECTION_TO_OFFSET: Record<ScreenSize, Record<PageSection, number>> = {
  [ScreenSize.xs]: {
    maruders: 0,
    dementors: 1.26,
    kingscross: 2.4,
    hufflepuff: 3.5,
    dailyprophet: 5,
  },
  [ScreenSize.s]: {
    maruders: 0,
    dementors: 1.2,
    kingscross: 2.1,
    hufflepuff: 3.2,
    dailyprophet: 4.4,
  },
  [ScreenSize.m]: {
    maruders: 0,
    dementors: 1.18,
    kingscross: 2.1,
    hufflepuff: 3.18,
    dailyprophet: 4.5,
  },
  [ScreenSize.l]: {
    maruders: 0,
    dementors: 1.25,
    kingscross: 2.3,
    hufflepuff: 3.4,
    dailyprophet: 4.63,
  },
  [ScreenSize.xl]: {
    maruders: 0,
    dementors: 1.25,
    kingscross: 2.3,
    hufflepuff: 3.4,
    dailyprophet: 4.63,
  },
};

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  const { parallax } = ctx;
  const { size } = useScreenSize();

  const scrollTo = useCallback(
    (section: PageSection) => {
      return parallax?.current?.scrollTo(SECTION_TO_OFFSET[size][section]);
    },
    [parallax, size]
  );

  return { scrollTo, ...ctx };
};
