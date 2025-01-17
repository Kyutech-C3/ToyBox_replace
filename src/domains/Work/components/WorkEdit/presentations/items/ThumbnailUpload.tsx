import type { FC } from 'react';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import { DropImage } from '@/components/functional/DropImage';
import { Center } from '@/components/ui/Center';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { cn } from '@/libs/utils';

type Props = {
  thumbnailUrl: string;
  handleUploadThumbnail: (file: File) => Promise<void>;
};
export const ThumbnailUpload: FC<Props> = ({
  thumbnailUrl,
  handleUploadThumbnail,
}) => (
  <>
    <Vertical className="items-center">
      <Typography className="text-lg font-bold">
        サムネイルアップロード
      </Typography>
      <Typography variant="body2" className="text-red-500">
        必須
      </Typography>
    </Vertical>
    <Horizontal className="gap-0 items-start -mt-4">
      <Typography variant="body2" className="text-gray-500">
        対応形式:
      </Typography>
      <Typography variant="body2" className="text-xs text-gray-500 mx-4">
        画像 [ .png .jpg .jpeg .bmp .gif ]
      </Typography>
    </Horizontal>
    <DropImage
      onDrop={(e) => {
        if (e[0]) {
          void handleUploadThumbnail(e[0]);
        }
      }}
      className="rounded-md relative h-64 w-full border-2 border-orange-pop"
    >
      <Center className="h-full -z-20 absolute flex flex-col">
        <div
          className={cn('bg-pale-red/25 w-full absolute h-0 bottom-0 -z-30', {
            'h-full': thumbnailUrl != '',
          })}
        />
        <Typography variant="body1">
          クリック または ドラッグ&ドロップ
        </Typography>
        <Typography variant="body2" className="text-gray-400">
          {thumbnailUrl != ''
            ? 'サムネイルをアップロード済み'
            : 'サムネイルをアップロードしてください'}
        </Typography>
      </Center>
      <Input
        id="thumbnail"
        className="cursor-pointer opacity-0 h-full"
        onChange={(e) => {
          if (!e.target.files?.length || !e.target.files[0]) {
            return;
          }
          void handleUploadThumbnail(e.target.files[0]);
        }}
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/bmp, image/gif"
      />
    </DropImage>
  </>
);
