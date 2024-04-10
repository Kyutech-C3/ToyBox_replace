export type User = {
  id: string;
  name: string;
  displayName: string;
  avatarUrl: string;
  profile: string;
  twitterId: string;
  githubId: string;
  createdAt: string;
  updatedAt: string;
}
export type AssetType = 'UNKNOWN' | 'zip' | 'image' | 'video' | 'music' | 'model' ;
export type Asset = {
  id: string;
  assetType: AssetType;
  user: User;
  extension: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}
export type CreateAssetRequest = {
  file: any;
  assetType: AssetType;
}
export type CreateAssetResponse = {
  id: string;
}
export type DeleteAssetRequest = {
  id: string;
}
export type DeleteAssetResponse = {
  status: string;
}
export type DiscordToken = {
  accessToken: string;
  refreshToken: string;
  expiredAt: string;
}
export type DiscordCallbackRequest = {
  code: string;
}
export type SignUpRequest = {
  name: string;
  email: string;
  password: string;
  displayName: string;
  avatarUrl: string;
}
export type PostTokenRequest = {
  refreshToken: string;
}
export type PostTokenResponse = {
  expiredAt: string;
  refreshToken: string;
  accessToken: string;
}
export type Tag = {
  id: string;
  name: string;
  color: string;
}
export type GetTagsRequest = {
  limit: string;
  smallestTagId: string;
  biggestTagId: string;
  w: string;
}
export type GetTagsResponse = {
  tags: Tag[];
}
export type PostTagRequest = {
  name: string;
  color: string;
}
export type GetTagRequest = {
  tagId: string;
}
export type PutTagRequest = {
  tagId: string;
  name: string;
  color: string;
}
export type DeleteTagRequest = {
  tagId: string;
}
export type DeleteTagResponse = {
  message: string;
}
export type GetUsersRequest = {
  limit: number;
  oldestUserId: string;
  newestUserId: string;
}
export type GetUsersResponse = {
  users: User[];
}
export type Url = {
  url: string;
  urlType: string;
  id: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}
export type Work = {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  user: User;
  assets: Asset[];
  urls: Url[];
  visibility: string;
  tags: Tag[];
  thumbnail: Asset;
  favoriteCount: number;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}
export type Comment = {
  id: string;
  content: string;
  user: User;
  workId: string;
  visibility: string;
  replyAt: string;
  createdAt: string;
  updatedAt: string;
  numberOfReply: number;
}
export type GetUserRequest = {
  userId: string;
}
export type GetUserWorksRequest = {
  userId: string;
  visibility: string;
  newestUserId: string;
  oldestUserId: string;
  tags: string;
  limit: number;
}
export type GetUserFavoritesRequest = {
  userId: string;
}
export type GetUserWorksResponse = {
  works: Work[];
}
export type GetUserFavoritesResponse = {
  works: Work[];
}
export type PutMeRequest = {
  displayName: string;
  profile: string;
  twitterId: string;
  githubId: string;
}
export type PutMeAvatarRequest = {
  file: string;
}
export type GetMeWorksRequest = {
  visibility: string;
  oldestUserId: string;
  newestUserId: string;
  tags: string;
  limit: number;
}
export type GetMeWorksResponse = {
  works: Work[];
}
export type GetMeFavoritesResponse = {
  works: Work[];
}
export type CreateWorkRequest = {
  title: string;
  description: string;
  visibility: string;
  thumbnailAssetId: string;
  assetsId: string;
  urls: UrlInfo[];
  tagsId: string;
}
export type GetWorksResponse = {
  works: Work[];
}
export type GetWorksRequest = {
  page: number;
  limit: number;
  visibility: string;
  tagNames: string;
  tagIds: string;
  searchWord: string;
}
export type GetWorkRequest = {
  workId: string;
}
export type DeleteWorkRequest = {
  workId: string;
}
export type UpdateWorkRequest = {
  workId: string;
  title: string;
  description: string;
  visibility: string;
  thumbnailAssetId: string;
  assetsId: string;
  urls: UrlInfo[];
  tagsId: string;
}
export type UrlInfo = {
  url: string;
  urlType: string;
}
export type GetCommentsRequest = {
  workId: string;
  limit: number;
  oldestCommentId: string;
  newestCommentId: string;
}
export type PostCommentRequest = {
  workId: string;
  replyAt: string;
  visibility: string;
}
export type PostCommentResponse = {
  content: string;
}
export type GetReplyCommentsRequest = {
  workId: string;
  commentId: string;
  limit: number;
  oldestCommentId: string;
  newestCommentId: string;
}
export type GetCommentsResponse = {
  comments: Comment[];
}
export type DeleteCommentRequest = {
  workId: string;
  commentId: string;
}
export type DeleteCommentResponse = {
  status: string;
}
export type GetWorkFavoriteRequest = {
  workId: string;
}
export type GetWorkFavoriteResponseItem = {
  work: Work;
  user: User;
  createdAt: string;
}
export type GetWorkFavoriteResponse = {
  favorites: GetWorkFavoriteResponseItem[];
  isFavorite: boolean;
  favoriteCount: number;
}
export type PostWorkFavoriteRequest = {
  workId: string;
}
export type PostWorkFavoriteResponse = {
  favorites: GetWorkFavoriteResponseItem[];
  isFavorite: boolean;
  favoriteCount: number;
}
export type DeleteWorkFavoriteRequest = {
  workId: string;
}
export type DeleteWorkFavoriteResponse = {
  favorites: GetWorkFavoriteResponseItem[];
  isFavorite: boolean;
  favoriteCount: number;
}
