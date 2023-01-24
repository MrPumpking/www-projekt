import cs from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface ParagraphProps {
  className?: string;
}

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
  className,
  children,
}) => {
  return (
    <p
      className={cs(
        'text-lg leading-relaxed md:text-xl md:leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  );
};
