import type { FC } from 'react';
import { Container } from '../container/Container';
import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import { OffCanvasToggle } from '../offcanvas/OffCanvasToggle';

export const Navbar: FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-navbar h-navbar items-center bg-navbar/90 px-4 backdrop-blur-sm">
      <Container className="flex h-full items-center justify-between">
        <Logo className="h-[60%]" />
        <OffCanvasToggle className="md:hidden" />
        <Menu dir="horizontal" className="hidden md:flex" />
      </Container>
    </nav>
  );
};
