import type { FC, ReactNode } from 'react';

import { cn } from '@/libs/utils';

type Props = {
  children: ReactNode;
  className?: string;
};
export const Horizontal: FC<Props> = ({ children, className }) => (
  <div className={cn('flex flex-col gap-4', className)}>{children} </div>
);
