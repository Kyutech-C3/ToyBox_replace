import type { FC } from 'react';

import { WorkEditContainer } from './presentations';

import type { Asset, URL } from '../../types';
import type { Tag } from '@/domains/Tag';

type Props = {
  defaultWork?: DefaultWork;
};

export type DefaultWork = {
  title: string;
  description: string;
  thumbnail: { id: string; url: string };
  assets: Asset[];
  tags: Tag[];
  urls: URL[];
  isPublic: boolean;
};

export const WorkEdit: FC<Props> = ({ defaultWork }) => (
  <WorkEditContainer defaultWork={defaultWork} />
);
