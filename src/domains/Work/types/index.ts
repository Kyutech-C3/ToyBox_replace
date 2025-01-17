import type { Tag } from '../../Tag';
import type { User } from '../../User';
import type { AssetType, Visibility } from '@/api/@types';

export type URL = {
  url: string;
  urlType: string;
};

export type WorkDetail = {
  id: string;
  title: string;
  description: string;
  creator: User;
  assets: Asset[];
  urls: URL[];
  isPublic: boolean;
  tags: Tag[];
  thumbnailUrl: string;
  favoriteCount?: number | undefined;
  isFavorite?: boolean | undefined;
  createdAt: string;
  updatedAt: string;
};

export type Work = Pick<
  WorkDetail,
  | 'id'
  | 'thumbnailUrl'
  | 'creator'
  | 'isPublic'
  | 'tags'
  | 'createdAt'
  | 'title'
>;

export type Works = Work[];

export type GetWorksQuerySchema = {
  page?: number | undefined;
  limit?: number | undefined;
  visibility?: Visibility | undefined;
  tag_names?: string | undefined;
  tag_ids?: string | undefined;
  search_word?: string | undefined;
};

export type GetWorksQuery = {
  page?: number;
  limit?: number;
  visibility?: Visibility;
  tagNames?: string[];
  tagIds?: string[];
  searchWord?: string;
};

export type Asset = {
  assetType: AssetType;
  id: string;
  extension: string;
  url: string;
};
