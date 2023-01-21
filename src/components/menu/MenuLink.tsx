import type { FC, PropsWithChildren } from 'react';

export const MenuLink: FC<PropsWithChildren> = ({ children }) => {
  return (
    <li className="grid h-full items-center">
      <a href="#" className="grid h-full items-center px-4">
        {children}
      </a>
    </li>
  );
};
