import type { GetTag } from '@/api/@types';
import type { ApiClient } from '@/hooks/useApiClient';

export const getTags = async (
  apiClient: ApiClient,
  searchWord: string
): Promise<GetTag[]> =>
  await apiClient.api.v1.tags.$get({ query: { w: searchWord } });
