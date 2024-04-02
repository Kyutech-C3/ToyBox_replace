import type { FC } from 'react';

import { AssetCard, SelectIndex } from './main';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Skeleton } from '@/components/ui/Skeleton';

export const AssetListLoading: FC = () => (
  <Horizontal className="items-center">
    <div className="w-[1000px] aspect-video snap-mandatory snap-x flex flex-row overflow-auto">
      {Array.from({ length: 5 }, (_, index) => (
        <AssetCard
          key={index}
          className={[
            index == 0 ? 'ml-1/2' : '',
            index == 5 - 1 ? 'mr-1/2' : '',
          ].join(' ')}
        >
          <Skeleton className="w-full h-full" />
        </AssetCard>
      ))}
    </div>
    <SelectIndex max={5} index={1} />
  </Horizontal>
);
