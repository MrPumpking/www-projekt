import { FC } from 'react';
import { MenuLink } from './MenuLink';
import cs from 'clsx';

interface MenuProps {
  dir?: 'vertical' | 'horizontal';
  className?: string;
}

export const Menu: FC<MenuProps> = ({ dir = 'vertical', className }) => {
  return (
    <ul
      role="menu"
      className={cs(
        'flex',
        {
          'h-full flex-row space-x-4': dir === 'horizontal',
          'flex-col space-y-4': dir === 'vertical',
        },
        className
      )}
    >
      <MenuLink>Section 1</MenuLink>
      <MenuLink>Section 2</MenuLink>
      <MenuLink>Section 3</MenuLink>
      <MenuLink>Section 4</MenuLink>
      <MenuLink>Section 5</MenuLink>
    </ul>
  );
};
