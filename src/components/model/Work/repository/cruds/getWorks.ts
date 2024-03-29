import type { GetWorksQuerySchema } from '../../types';
import type { ResWorks } from '@/api/@types';
import type { ApiClient } from '@/hooks/useApiClient';

export const getWorks = async (
  apiClient: ApiClient,
  query: GetWorksQuerySchema
): Promise<ResWorks> => await apiClient.api.v1.works.$get({ query });
