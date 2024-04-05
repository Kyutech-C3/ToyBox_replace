import type { ReactNode } from 'react';

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

import { Vertical } from '@/components/Layout/Vertical';

export const SelectIndex = ({
  index,
  max,
  handleClick = (): void => {},
}: {
  index: number;
  max: number;
  handleClick?: (index: number) => void;
}): ReactNode => (
  <Vertical className="items-center">
    <button>
      <ArrowLeftCircle
        onClick={() => handleClick(index - 1)}
        className="w-6 h-6 rounded-full transition-transform duration-300 bg-pale-red cursor-pointer"
      />
    </button>
    {Array.from({ length: max }, (_, i) => (
      <button
        onClick={() => handleClick(i)}
        key={i}
        className={` w-4 h-4 rounded-full transition-transform duration-300 ${
          i === index ? 'bg-orange-pop scale-125' : 'bg-pale-red'
        }`}
      />
    ))}
    <ArrowRightCircle
      onClick={() => handleClick(index + 1)}
      className="w-6 h-6 rounded-full transition-transform duration-300 bg-pale-red cursor-pointer"
    />
  </Vertical>
);
