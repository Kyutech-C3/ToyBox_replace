import type { FC } from 'react';

import Image from 'next/image';

import type { Asset } from '@/domains/Work/types';

type ItemProps = {
  asset: Asset;
};
export const ImageAsset: FC<ItemProps> = ({ asset }) => (
  <div className="w-full h-full relative">
    <Image className=" object-contain" fill src={asset.url} alt="投稿画像" />
  </div>
);
