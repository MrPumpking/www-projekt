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
    <h2
      className={cs(
        'font-serif text-3xl font-extrabold md:text-5xl',
        className
      )}
    >
      {children}
    </h2>
  );
};
