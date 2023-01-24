import { ParallaxConfig } from '@/config/parallax.config';
import { useScreenSize } from '@/hooks/useScreenSize';

export const useParallaxConfig = () => {
  const { size } = useScreenSize();
  return { config: ParallaxConfig[size], size };
};
