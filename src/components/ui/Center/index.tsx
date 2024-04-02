import type { FC, ReactNode } from 'react';

import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Center: FC<Props> = ({ children, className }) => (
  <div className={clsx('flex items-center justify-center w-full', className)}>
    {children}
  </div>
);
