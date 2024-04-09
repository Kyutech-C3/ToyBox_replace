import type { ClassAttributes, FC, HTMLAttributes } from 'react';

import type { ExtraProps } from 'react-markdown';

type Props = ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps;
export const BlockQuote: FC<Props> = ({ ...props }) => (
  <code
    className={
      "bg-gray-400/50 px-1 rounded-sm w-fit before:contents[''] after:contents['']"
    }
    {...props}
  />
);
