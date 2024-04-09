import type { ClassAttributes, HTMLAttributes, FC } from 'react';

import clsx from 'clsx';

import type { ExtraProps } from 'react-markdown';

type Props = ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps;

type HeadTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const H123: FC<Props> = ({ className, node, children, ...props }) => {
  const As = (node?.tagName ?? 'h1') as HeadTag;
  return (
    <As
      className={clsx(
        'border-b-[3px] border-blue-400 border-dotted',
        className
      )}
      {...props}
    >
      {children}
    </As>
  );
};

export const H456: FC<Props> = ({ className, node, children, ...props }) => {
  const As = (node?.tagName ?? 'h4') as HeadTag;
  return (
    <As
      className={clsx('border-b-2 border-blue-400 border-dotted', className)}
      {...props}
    >
      {children}
    </As>
  );
};
