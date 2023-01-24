import { useEffect, useState } from 'react';

export enum ScreenSize {
  xs = 768,
  s = 1024,
  m = 1280,
  l = 1440,
  xl = 1441,
}

export const useScreenSize = () => {
  const [size, setSize] = useState(ScreenSize.xl);

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth < ScreenSize.xs) {
        return setSize(ScreenSize.xs);
      }
      if (window?.innerWidth < ScreenSize.s) {
        return setSize(ScreenSize.s);
      }
      if (window?.innerWidth < ScreenSize.m) {
        return setSize(ScreenSize.m);
      }
      if (window?.innerWidth < ScreenSize.l) {
        return setSize(ScreenSize.l);
      }
      return setSize(ScreenSize.xl);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { size };
};
