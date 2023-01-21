import cs from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface ParagraphProps {
  className?: string;
}

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
  className,
  children,
}) => {
  return <p className={cs('text-xl leading-relaxed', className)}>{children}</p>;
};
