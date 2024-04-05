import type { ElementType, FC, ReactNode } from 'react';

import { cn } from '@/libs/utils';

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};
export const Horizontal: FC<Props> = ({
  children,
  className,
  as: As = 'div',
}) => <As className={cn('flex flex-col gap-4', className)}>{children}</As>;
