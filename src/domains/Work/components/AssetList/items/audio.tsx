'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import type { FC } from 'react';

import type { Asset } from '@/domains/Work/types';

const Player = lazy(() => import('@/libs/VideoPlayer'));
type ItemProps = {
  asset: Asset;
};
export const AudioAsset: FC<ItemProps> = ({ asset }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  if (!client) return <div className="w-full h-full">loading...</div>;
  return (
    <div className="w-full h-full">
      <Suspense fallback={<p>...loading</p>}>
        <Player
          url={asset.url}
          className="react-player"
          contr
          ols
          width="100%"
          height="100%"
        />
      </Suspense>
    </div>
  );
};
