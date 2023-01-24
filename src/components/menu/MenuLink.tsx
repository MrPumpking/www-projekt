import type { FC, PropsWithChildren } from 'react';
import { PageSection, useMenu } from './useMenu';
import cs from 'clsx';
import { useOffCanvas } from '../offcanvas/useOffCanvas';

interface MenuLinkProps {
  section: PageSection;
}

export const MenuLink: FC<PropsWithChildren<MenuLinkProps>> = ({
  section,
  children,
}) => {
  const { scrollTo, activeSection } = useMenu();
  const { setOpen } = useOffCanvas();

  return (
    <li className="grid h-full items-center">
      <a
        href={`#${section}`}
        className={cs(
          'grid h-full items-center px-4 transition-all hover:underline hover:underline-offset-8',
          {
            'opacity-60': activeSection !== section,
            'underline underline-offset-8': activeSection === section,
          }
        )}
        onClick={(event) => {
          event.preventDefault();
          setOpen(false);
          scrollTo(section);
        }}
      >
        {children}
      </a>
    </li>
  );
};
