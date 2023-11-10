import type { FC, HTMLAttributes, ReactNode } from 'react';

import { cva } from 'class-variance-authority';
import Link from 'next/link';

import type { VariantProps } from 'class-variance-authority';
import type { LinkProps as NextLinkProps } from 'next/link';

import { cn } from '@/libs/utils';

const tagVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type LinkProps = VariantProps<typeof tagVariants> &
  NextLinkProps & { className?: string; children: ReactNode | ReactNode[] };

type TagProps = VariantProps<typeof tagVariants> &
  HTMLAttributes<HTMLDivElement>;

export type Props = TagProps | LinkProps;

const isLink = (value: Props): value is LinkProps =>
  (value as LinkProps).href !== undefined;

const Tag: FC<Props> = (props) => {
  if (isLink(props)) {
    return (
      <Link
        {...props}
        className={cn(tagVariants({ variant: props.variant }), props.className)}
      />
    );
  }
  return (
    <div
      className={cn(tagVariants({ variant: props.variant }), props.className)}
      {...props}
    />
  );
};

export { Tag, tagVariants };
