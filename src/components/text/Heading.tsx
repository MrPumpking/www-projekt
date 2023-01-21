import cs from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface HeadingProps {
  className?: string;
}

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({
  className,
  children,
}) => {
  return (
    <h2 className={cs('font-serif text-5xl font-extrabold', className)}>
      {children}
    </h2>
  );
};
