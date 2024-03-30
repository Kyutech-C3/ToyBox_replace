import type { CSSProperties, FC, ReactNode } from 'react';

import clsx from 'clsx';

type ListProps = {
  children: ReactNode;
  className?: string;
  wrap?: CSSProperties['flexWrap'];
};

export const List: FC<ListProps> = ({ children, className, wrap }) => (
  <ul
    className={clsx(
      'flex flex-row gap-4',
      wrap && 'flex-wrap',
      !wrap && 'flex-nowrap',
      className
    )}
  >
    {children}
  </ul>
);

type ListItemProps = {
  children: ReactNode;
  className?: string;
};

export const ListItem: FC<ListItemProps> = ({ children, className }) => (
  <li className={className}>{children}</li>
);
