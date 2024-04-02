import type { FC } from 'react';

import { Heart, Link, Megaphone, Share2, Tag } from 'lucide-react';

import { AssetList } from '../../AssetList';

import { Contents } from './Contents';

import type { WorkDetail } from '../../../types';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import { UserCard } from '@/components/model/User/components/UserCard';
import { Center } from '@/components/ui/Center';
import { DateLabel } from '@/components/ui/DateLabel';
import { Typography } from '@/components/ui/Typography';

type Props = {
  work: WorkDetail;
};

export const WorkDetailPresentation: FC<Props> = ({ work }: Props) => (
  <Center>
    <Horizontal>
      <Typography variant="h1" className="text-center">
        {work.title}
      </Typography>
      <Center>
        <AssetList assets={work.assets} />
      </Center>
      <Vertical className="items-center">
        <div className="flex-grow">
          <UserCard user={work.creator} />
        </div>
        <Horizontal className="gap-0 items-center justify-center">
          <Heart
            className="text-pink-light"
            fill={work.isFavorite ? '#FF4587' : '#fff'}
            size={32}
          />
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
        {work.urls.map((url) => (
          <Vertical key={url.url}>
            <Link size={20} className="text-orange-pop" />
            <Typography>{url.url}</Typography>
          </Vertical>
        ))}
      </Horizontal>
      <Horizontal className="px-8">
        <Center>
          <Contents contents={work.description} />
        </Center>
        <Vertical className="items-center">
          <Heart
            className="text-pink-light"
            fill={work.isFavorite ? '#FF4587' : '#fff'}
          />
          <Typography variant="body2">{work.favoriteCount}</Typography>
        </Vertical>
        <Horizontal className="gap-0">
          <Vertical className="items-center gap-0">
            <Typography variant="body2">投稿日時：</Typography>
            <DateLabel date={work.createdAt} format="yyyy年MM月dd日 hh:mm:dd" />
          </Vertical>
          <Vertical className="items-center gap-0">
            <Typography variant="body2">更新日時：</Typography>
            <DateLabel date={work.updatedAt} format="yyyy年MM月dd日 hh:mm:dd" />
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
