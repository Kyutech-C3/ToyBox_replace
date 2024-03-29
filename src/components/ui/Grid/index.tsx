import type { FC, ReactNode } from 'react';

import clsx from 'clsx';

type GridProps = {
  children: ReactNode;
  className?: string;
};

const gridVariants = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4';

export const Grid: FC<GridProps> = ({ children, className }) => (
  <div className={clsx(gridVariants, className)}>{children}</div>
);

type GridItemProps = {
  children: ReactNode;
  className?: string;
};
export const GridItem: FC<GridItemProps> = ({ children, className }) => (
  <div className={clsx('relative', className)}>{children}</div>
);
