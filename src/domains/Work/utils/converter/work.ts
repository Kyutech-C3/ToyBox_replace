import { AssetsConverter } from './asset';
import { urlsConverter, urlsConverterToBaseURLInfo } from './url';

import type { DefaultWork } from '../../components/WorkEdit';
import type { Work, WorkDetail, Works } from '../../types';
import type { Work as modelWork, PostWork, ResWorks } from '@/api/@types';

import { tagConverter } from '@/domains/Tag/utils';
import { userConverter } from '@/domains/User/utils';

export const convertWork = (work: modelWork): Work => ({
  id: work.id,
  title: work.title,
  creator: userConverter(work.user),
  isPublic: work.visibility === 'public',
  tags: work.tags?.map((tag) => tagConverter(tag)),
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
  urls: urlsConverter(work.urls),
  thumbnailUrl: work.thumbnail.url,
  tags: work.tags.map((tag) => tagConverter(tag)),
  favoriteCount: work.favorite_count,
  isFavorite: work.is_favorite,
  createdAt: work.created_at,
  updatedAt: work.updated_at,
});

export const convertCreateWork = (work: DefaultWork): PostWork => ({
  title: work.title,
  description: work.description,
  visibility: work.isPublic ? 'public' : 'private',
  tags_id: work.tags?.map((tag) => tag.id),
  thumbnail_asset_id: work.thumbnail.id,
  urls: urlsConverterToBaseURLInfo(work.urls),
  assets_id: work.assets.map((asset) => asset.id),
});

export const convertWorks = (
  works: ResWorks
): { works: Works; totalCount: number } => ({
  works: works.works.map((work) => convertWork(work)),
  totalCount: works.works_total_count,
});
