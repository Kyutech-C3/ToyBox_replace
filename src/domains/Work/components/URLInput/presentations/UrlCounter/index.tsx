import type { FC } from 'react';

import { Minus } from 'lucide-react';

type Props = {
  count: number;
  max: number;
};

export const UrlCounter: FC<Props> = ({ count, max }: Props) => (
  <div className="relative flex items-center h-full w-12">
    <p className="absolute top-[0.05rem] left-[0.9rem] text-gray-500 font-bold">
      {count}
    </p>
    <Minus
      strokeWidth={0.7}
      size={45}
      className="absolute text-gray-500 -rotate-[50deg] left-[0.3rem] -top-[0.15rem]"
    />
    <p className="absolute bottom-[0.2rem] left-[1.9rem] text-gray-500 font-bold">
      {max}
    </p>
  </div>
);
