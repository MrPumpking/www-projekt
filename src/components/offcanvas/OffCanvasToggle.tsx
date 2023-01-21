import type { FC } from 'react';
import { useOffCanvas } from './useOffCanvas';
import cs from 'clsx';

interface OffCanvasToggleProps {
  className?: string;
}

export const OffCanvasToggle: FC<OffCanvasToggleProps> = ({ className }) => {
  const { isOpen, setOpen } = useOffCanvas();

  return (
    <button
      className={cs(
        'tham-e-squeeze tham tham-w-6',
        {
          'tham-active': isOpen,
        },
        className
      )}
      onClick={() => setOpen(true)}
    >
      <div className="tham-box">
        <div className="tham-inner bg-text" />
      </div>
    </button>
  );
};
