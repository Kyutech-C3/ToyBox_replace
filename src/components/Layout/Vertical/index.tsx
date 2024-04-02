import type { FC, ReactNode } from 'react';

import { cn } from '@/libs/utils';

type Props = {
  children: ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
};
export const Vertical: FC<Props> = ({
  children,
  className,
  as: As = 'div',
}) => <As className={cn('flex flex-row gap-4', className)}>{children} </As>;
