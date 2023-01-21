import type { FC } from 'react';
import { Container } from '../container/Container';
import { Menu } from '../menu/Menu';
import { OffCanvasToggle } from '../offcanvas/OffCanvasToggle';

export const Navbar: FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 h-navbar items-center bg-red-500 px-4">
      <Container className="flex h-full items-center">
        <OffCanvasToggle className="md:hidden" />
        <Menu dir="horizontal" className="hidden md:flex" />
      </Container>
    </nav>
  );
};
