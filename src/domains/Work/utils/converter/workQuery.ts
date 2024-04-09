import type { GetWorksQuery, GetWorksQuerySchema } from '../../types';

export const workQueryConverter = (
  query: GetWorksQuery
): GetWorksQuerySchema => ({
  search_word: query?.searchWord ?? '',
  tag_ids: query?.tagIds?.join(',') ?? '',
  page: query?.page ?? 1,
  limit: query?.limit ?? 30,
  visibility: query?.visibility ?? 'public',
});
