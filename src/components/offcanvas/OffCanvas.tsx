import type { FC } from 'react';
import { Menu } from '../menu/Menu';
import { useOffCanvas } from './useOffCanvas';
import cs from 'clsx';

export const OffCanvas: FC = () => {
  const { isOpen, setOpen } = useOffCanvas();

  return (
    <>
      <div
        className={cs(
          'fixed inset-0 z-offcanvas-backdrop bg-black transition-all',
          {
            'pointer-events-none opacity-0': !isOpen,
            'opacity-50': isOpen,
          }
        )}
        onClick={() => setOpen(false)}
      />
      <div
        className={cs(
          'fixed left-0 top-0 bottom-0 z-offcanvas w-offcanvas bg-white shadow-md transition-all',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen,
          }
        )}
      >
        <Menu />
      </div>
    </>
  );
};
