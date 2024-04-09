import type { ReactNode, FC } from 'react';

import { AudioAsset } from './items/audio';
import { ImageAsset } from './items/image';
import { ModelAsset } from './items/model';
import { VideoAsset } from './items/video';
import { ZipAsset } from './items/zip';

import type { Asset } from '../../types';

import { FullScreen } from '@/components/functional/FullScreen';
import { cn } from '@/libs/utils';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const AssetCard: FC<CardProps> = ({ children, className }) => (
  <FullScreen className={cn('aspect-thumbnail p-8', className)}>
    <div className="h-full bg-red-500 rounded-md">{children}</div>
  </FullScreen>
);

export const AssetRender = (
  asset: Asset,
  className: string = ''
): ReactNode => (
  <AssetCard key={asset.url} className={className}>
    {((): ReactNode => {
      switch (asset.assetType) {
        case 'image':
          return <ImageAsset asset={asset} />;
        case 'video':
          return <VideoAsset asset={asset} />;
        case 'music':
          return <AudioAsset asset={asset} />;
        case 'model':
          return <ModelAsset asset={asset} />;
        case 'zip':
          return <ZipAsset asset={asset} />;
        default:
          return <></>;
      }
    })()}
  </AssetCard>
);
