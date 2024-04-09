'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';

import type { Asset } from '@/domains/Work/types';

import Player from '@/libs/VideoPlayer';

type ItemProps = {
  asset: Asset;
};
export const VideoAsset: FC<ItemProps> = ({ asset }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  if (!client) return <div className="w-full h-full">loading...</div>;
  return (
    <div className="w-full h-full">
      <Player
        url={asset.url}
        className="react-player"
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};
