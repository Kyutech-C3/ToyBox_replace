import { AssetsConverter } from './asset';

import type { Work, WorkDetail, Works } from '../../types';
import type { Work as modelWork, ResWorks } from '@/api/@types';

import { tagConverter } from '@/components/model/Tag/utils';
import { userConverter } from '@/components/model/User/utils';

export const convertWork = (work: modelWork): Work => ({
  id: work.id,
  title: work.title,
  creator: userConverter(work.user),
  isPublic: work.visibility === 'public',
  tags: work.tags.map((tag) => tagConverter(tag)),
  thumbnailUrl: work.thumbnail.url,
  createdAt: work.created_at,
});

export const convertWorkDetail = (work: modelWork): WorkDetail => ({
  id: work.id,
  title: work.title,
  description: work.description,
  assets: AssetsConverter(work.assets),
  creator: userConverter(work.user),
  isPublic: work.visibility === 'public',
  urls: work.urls,
  thumbnailUrl: work.thumbnail.url,
  tags: work.tags.map((tag) => tagConverter(tag)),
  favoriteCount: work.favorite_count,
  isFavorite: work.is_favorite,
  createdAt: work.created_at,
  updatedAt: work.updated_at,
});

export const convertWorks = (
  works: ResWorks
): { works: Works; totalCount: number } => ({
  works: works.works.map((work) => convertWork(work)),
  totalCount: works.works_total_count,
});
