import type { FC } from 'react';

import { Heart, Share2, Tag, Link, Megaphone } from 'lucide-react';

import { AssetListLoading } from '../../AssetList';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import { UserCardLoading } from '@/components/model/User/components/UserCard';
import { Center } from '@/components/ui/Center';
import { Skeleton } from '@/components/ui/Skeleton';
import { Typography } from '@/components/ui/Typography';

export const WorkDetailLoadingPresentation: FC = () => (
  <Center>
    <Horizontal>
      <Center>
        <Skeleton className="w-64 h-10" />
      </Center>
      <Center>
        <AssetListLoading />
      </Center>
      <Vertical className="items-center">
        <div className="flex-grow">
          <UserCardLoading />
        </div>
        <Horizontal className="gap-0 items-center justify-center">
          <Heart className="text-pink-light" size={32} />
          <Typography variant="body2">応援！</Typography>
        </Horizontal>
        <Horizontal className="gap-0 items-center justify-center">
          <Share2 size={32} />
          <Typography variant="body2">共有</Typography>
        </Horizontal>
      </Vertical>
      <Vertical>
        <Tag size={20} className="text-orange-pop" />
      </Vertical>
      <Horizontal>
        {Array.from({ length: 3 }, (_, index) => (
          <Vertical key={`link-${index}`}>
            <Link size={20} className="text-orange-pop" />
            <Skeleton className="w-32 h-6" />
          </Vertical>
        ))}
      </Horizontal>
      <Horizontal className="px-8">
        <div className="py-4">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
        </div>
        <Vertical className="items-center">
          <Heart className="text-pink-light" />
          <Skeleton className="w-32 h-6" />
        </Vertical>
        <Horizontal className="gap-0">
          <Vertical className="items-center gap-0">
            <Typography variant="body2">投稿日時：</Typography>
            <Skeleton className="w-32 h-6" />
          </Vertical>
          <Vertical className="items-center gap-0">
            <Typography variant="body2">更新日時：</Typography>
            <Skeleton className="w-32 h-6" />
          </Vertical>
        </Horizontal>
        <Vertical className="items-center">
          <Megaphone />
          <Typography variant="h2">コメント</Typography>
        </Vertical>
      </Horizontal>
    </Horizontal>
  </Center>
);
