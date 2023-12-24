import type { FC } from 'react';

import { URLInputContainer } from './presentations';

type Props = {
  links: string[];
  setLinks: (links: string[]) => void;
  maxAmount: number;
};

export const URLInput: FC<Props> = (props: Props) => (
  <URLInputContainer {...props} />
);
