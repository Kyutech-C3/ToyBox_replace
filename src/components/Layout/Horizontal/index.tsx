import type { FC, ReactNode } from 'react';

import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string;
};
export const Horizontal: FC<Props> = ({ children, className }) => (
  <div className={clsx('flex flex-col gap-4', className)}>{children} </div>
);
