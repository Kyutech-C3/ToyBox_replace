import type { FC, ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/libs/utils';

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'body1'
  | 'body2'
  | 'caption';

type Props = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-bold',
      h5: 'text-lg font-bold',
      h6: 'text-base font-bold',
      strong: 'font-bold',
      body1: 'text-base font-normal',
      body2: 'text-sm font-normal',
      caption: 'text-xs font-normal',
    },
  },
});

export const Typography: FC<Props> = ({
  variant = 'body1',
  className,
  children,
}) => {
  const Tag =
    variant === 'strong'
      ? 'strong'
      : variant === 'body1' || variant === 'body2'
        ? 'p'
        : variant;

  return (
    <Tag className={cn(typographyVariants({ variant }), className)}>
      {children}
    </Tag>
  );
};
