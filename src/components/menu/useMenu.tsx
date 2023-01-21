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

export const MenuContextProvider: FC<PropsWithChildren<MenuContextProps>> = ({
  parallax,
  children,
}) => {
  const [activeSection, setActiveSection] = useState<PageSection>('maruders');

  return (
    <MenuContext.Provider value={{ parallax, activeSection, setActiveSection }}>
      {children}
    </MenuContext.Provider>
  );
};

const SECTION_TO_OFFSET = {
  maruders: 0,
  dementors: 1.25,
  kingscross: 2.3,
  hufflepuff: 3.4,
  dailyprophet: 4.63,
};

export type PageSection = keyof typeof SECTION_TO_OFFSET;

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  const { parallax } = ctx;

  const scrollTo = useCallback(
    (section: PageSection) => {
      return parallax?.current?.scrollTo(SECTION_TO_OFFSET[section]);
    },
    [parallax]
  );

  return { scrollTo, ...ctx };
};
