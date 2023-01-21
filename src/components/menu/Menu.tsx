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
      <MenuLink section="maruders">Maruder&lsquo;s Map</MenuLink>
      <MenuLink section="dementors">Dementors</MenuLink>
      <MenuLink section="kingscross">King&lsquo;s Cross Station</MenuLink>
      <MenuLink section="hufflepuff">Hufflepuff</MenuLink>
      <MenuLink section="dailyprophet">Daily Prophet</MenuLink>
    </ul>
  );
};
