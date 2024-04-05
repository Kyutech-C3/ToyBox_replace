'use client';

import { useRef, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

import { AssetRender } from './assetRender';

import type { Asset } from '../../types';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import { cn } from '@/libs/utils';

type Props = {
  assets: Asset[];
};

export const AssetList: FC<Props> = ({ assets }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentSnap, setCurrentSnap] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const handleClick = (index: number): void => {
    if (!ref.current || isScroll) return;
    const unitWidth = ref.current.clientHeight * (21 / 16) + 32;
    setIsScroll(true);
    ref.current.scrollTo({
      left: unitWidth * index,
      behavior: 'smooth',
    });

    setTimeout(
      () => {
        setIsScroll(false);
      },
      1000 * (Math.abs(currentSnap - index) * 0.1 + 1)
    );
  };

  useEffect(() => {
    if (!ref.current) return;
    const unitWidth = ref.current.clientHeight * (21 / 16) + 32;
    const handleScroll = (): void => {
      if (!ref.current) return;
      const snap = Math.round(
        (ref.current.scrollLeft - unitWidth / 2) / unitWidth
      );
      setCurrentSnap(snap);
    };
    ref.current.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <Horizontal className="items-center">
      <div
        className="w-[1000px] aspect-video snap-mandatory snap-x flex flex-row overflow-x-scroll scroll-smooth duration-300"
        ref={ref}
      >
        {assets.map((asset, index) =>
          AssetRender(
            asset,
            cn(
              'scale-item',
              index == 0 ? 'ml-1/2' : '',
              index == assets.length - 1 ? 'mr-1/2' : '',
              isScroll ? '' : 'snap-center'
            )
          )
        )}
      </div>
      <SelectIndex
        max={assets.length}
        index={currentSnap}
        handleClick={handleClick}
      />
    </Horizontal>
  );
};

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
