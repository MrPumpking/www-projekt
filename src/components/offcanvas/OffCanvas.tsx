import type { FC } from 'react';
import { Menu } from '../menu/Menu';
import { useOffCanvas } from './useOffCanvas';
import cs from 'clsx';
import { Logo } from '../logo/Logo';

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
          'fixed right-0 top-0 bottom-0 z-offcanvas flex w-offcanvas flex-col space-y-8 bg-bg shadow-md transition-all',
          {
            '-translate-x-0': isOpen,
            'translate-x-full': !isOpen,
          }
        )}
      >
        <div className="grid place-items-center p-4 pt-8">
          <Logo className="h-[64px]" />
        </div>
        <Menu />
      </div>
    </>
  );
};
