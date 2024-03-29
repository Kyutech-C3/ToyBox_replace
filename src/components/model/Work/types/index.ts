import type { Asset, UrlInfo } from '@/api/@types';
// NOTE:User Asset UrlInfo GetTagはそのうち別の場所からimportするようにする

export type WorkDetail = {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  creator: User;
  assets: Asset[];
  urls: UrlInfo[];
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
{
  /* TODO:tag domainが作成されたらそこからimportする */
}
type Tag = {
  id: string;
  name: string;
  color: string;
  textColor: string;
};
{
  /* TODO:user domainが作成されたらそこからimportする */
}
type User = {
  id: string;
  avatarUrl: string;
  displayName: string;
};

export type Works = Work[];
