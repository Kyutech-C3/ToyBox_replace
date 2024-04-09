import type { FC, ReactNode } from 'react';

import clsx from 'clsx';

type ListProps = {
  children: ReactNode;
  className?: string;
};

export const List: FC<ListProps> = ({ children, className }) => (
  <ul className={clsx('flex flex-row gap-4', className)}>{children}</ul>
);

type ListItemProps = {
  children: ReactNode;
  className?: string;
};

export const ListItem: FC<ListItemProps> = ({ children, className }) => (
  <li className={className}>{children}</li>
);
