import type { FC } from 'react';
import { Container } from '../container/Container';
import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import { useMenu } from '../menu/useMenu';
import { OffCanvasToggle } from '../offcanvas/OffCanvasToggle';
import cs from 'clsx';

export const Navbar: FC = () => {
  const { scrollTo } = useMenu();

  return (
    <nav
      className={cs(
        'fixed left-0 right-0 top-0 z-navbar h-navbar items-center bg-navbar/90 px-4 backdrop-blur-sm',
        `after:-bottom-[config(h-navbar)] after:absolute after:left-0 after:right-0 after:block after:h-[128px] after:bg-gradient-to-b after:from-bg/90 after:to-transparent after:backdrop-blur-lg after:content-[""]`
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Logo
          className="h-[60%] cursor-pointer"
          onClick={() => scrollTo('maruders')}
        />
        <OffCanvasToggle className="lg:hidden" />
        <Menu dir="horizontal" className="hidden lg:flex" />
      </Container>
    </nav>
  );
};
