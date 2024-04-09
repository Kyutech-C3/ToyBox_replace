import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { buttonVariants } from '../Button';

import { cn } from '@/libs/utils';

const buttonStyles =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

type Props = {
  children: ReactNode;
};

const IconButton = forwardRef<HTMLButtonElement, ButtonProps & Props>(
  ({ className, children, ...props }, ref) => (
    <button className={cn(buttonStyles, className)} ref={ref} {...props}>
      {children}
    </button>
  )
);
IconButton.displayName = 'IconButton';

export { IconButton, buttonVariants };
