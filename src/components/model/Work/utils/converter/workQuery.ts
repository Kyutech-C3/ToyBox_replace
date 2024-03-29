import type { GetWorksQuery, GetWorksQuerySchema } from '../../types';

export const workQueryConverter = (
  query: GetWorksQuery
): GetWorksQuerySchema => ({
  search_word: query.searchWord,
  tag_ids: query.tagIds,
  page: query.page,
  limit: query.limit,
  visibility: query.visibility,
});
