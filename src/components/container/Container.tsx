import { FC, PropsWithChildren } from 'react';
import cs from 'clsx';

interface ContainerProps {
  className?: string;
  variant?: 'default' | 'text';
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  className,
  children,
  variant = 'default',
}) => {
  return (
    <div
      className={cs(
        'container mx-auto px-4',
        { 'max-w-text': variant === 'text' },
        className
      )}
    >
      {children}
    </div>
  );
};
