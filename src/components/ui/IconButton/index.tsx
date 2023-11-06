import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { buttonVariants } from '../Button';

import { cn } from '@/libs/utils';

const buttonStyles =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

type Props = {
  children: ReactNode;
};

const IconButton = forwardRef<HTMLButtonElement, ButtonProps & Props>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonStyles, className)} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton, buttonVariants };
