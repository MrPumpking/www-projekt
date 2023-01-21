import { PageSection, useMenu } from '@/components/menu/useMenu';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useSectionListener = (section: PageSection) => {
  const { ref, inView } = useInView();
  const { setActiveSection } = useMenu();

  useEffect(() => {
    if (inView) {
      setActiveSection(section);
    }
  }, [inView, section, setActiveSection]);

  return { ref };
};
