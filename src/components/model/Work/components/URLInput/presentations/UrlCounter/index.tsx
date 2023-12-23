import type { FC } from 'react';

import { Minus } from 'lucide-react';

type Props = {
  count: number;
  max: number;
};

export const UrlCounter: FC<Props> = ({ count, max }: Props) => (
  <div className="relative flex items-center w-16">
    <p className="absolute font-bold top-[0.125rem] left-3">{count}</p>
    <Minus
      strokeWidth={0.7}
      size={50}
      className="absolute -rotate-[50deg] left-[0.1rem] -top-[0.17rem]"
    />
    <p className="absolute font-bold bottom-0 left-8">{max}</p>
  </div>
);
