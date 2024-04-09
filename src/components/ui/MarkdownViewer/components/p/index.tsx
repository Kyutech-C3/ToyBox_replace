import type { ClassAttributes, FC, HTMLAttributes } from 'react';

import type { ExtraProps } from 'react-markdown';

type Props = ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement> &
  ExtraProps;
export const P: FC<Props> = ({ children, ...props }) => {
  if (!Array.isArray(children)) {
    return (
      <p {...props} className="flex items-center mx-4">
        {children}
      </p>
    );
  }
  return (
    <p className="w-full" {...props}>
      {children.map((child) => (
        <>{child}</>
      ))}
    </p>
  );
};
