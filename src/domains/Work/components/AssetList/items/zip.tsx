import type { FC } from 'react';

import type { Asset } from '@/domains/Work/types';

type ItemProps = {
  asset: Asset;
};
export const ZipAsset: FC<ItemProps> = ({ asset }) => (
  <div className="">this is zip asset {asset.id}</div>
);
