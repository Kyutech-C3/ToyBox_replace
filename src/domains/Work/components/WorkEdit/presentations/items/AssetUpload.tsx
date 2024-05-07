import type { FC } from 'react';

import { AssetRender } from '../../../AssetList/assetRender';

import { SupportExtPopOver } from './SupportExtPopOver';

import type { Asset } from '@/domains/Work/types';

import { Vertical } from '@/components/Layout/Vertical';
import { DropImage } from '@/components/functional/DropImage';
import { Center } from '@/components/ui/Center';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { cn } from '@/libs/utils';

type Props = {
  handleUploadAssets: (files: FileList) => Promise<void>;
  assets: Asset[];
};
export const AssetUpload: FC<Props> = ({ handleUploadAssets, assets }) => (
  <>
    <Vertical className="items-center">
      <Typography className="text-lg font-bold">アセット</Typography>
      <Typography className="text-red-500" variant="body2">
        必須
      </Typography>
      <SupportExtPopOver
        supportedExts={[
          {
            category: '画像',
            exts: ['png', 'jpg', 'jpeg', 'bmp', 'gif'],
          },
          {
            category: '動画',
            exts: ['mp4', 'mov'],
          },
          {
            category: '音源',
            exts: ['mp3', 'wav', 'm4a'],
          },
          {
            category: 'モデル',
            exts: ['gltf', 'fbx'],
          },
          {
            category: 'zip',
            exts: ['zip'],
          },
        ]}
      />
    </Vertical>
    <Vertical className="gap-2 w-full overflow-scroll">
      {assets.map((asset) => AssetRender(asset, 'w-24 p-0'))}
    </Vertical>
    <DropImage
      onDrop={(e) => {
        void handleUploadAssets(e);
      }}
      className="rounded-md relative w-full h-64 border-2 border-orange-pop"
    >
      <Center className="h-full -z-20 absolute flex flex-col">
        <div
          className={cn('bg-pale-red/25 w-full absolute h-0 bottom-0 -z-30', {
            'h-full': assets.length > 0,
          })}
        />
        <Typography variant="body1">
          クリック または ドラッグ&ドロップ
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          {assets.length > 0
            ? `${assets.length}件のアセットをアップロード済み`
            : 'アセットをアップロードしてください'}
        </Typography>
      </Center>
      <Input
        className="cursor-pointer opacity-0 h-full"
        onChange={(e) => {
          if (!e.target.files?.length || !e.target.files[0]) {
            return;
          }
          void handleUploadAssets(e.target.files);
        }}
        multiple
        accept="image/png, image/jpeg, image/jpg, image/bmp, image/gif, video/mp4, video/mov, audio/mp3, audio/wav, audio/m4a, model/gltf, model/fbx, application/zip"
        type="file"
      />
    </DropImage>
  </>
);
