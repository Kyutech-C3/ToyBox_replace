import type { GetWorksQuerySchema } from '../../types';
import type { ResWorks } from '@/api/@types';

import { apiClient } from '@/libs/apiClient';

export const getWorks = async (query: GetWorksQuerySchema): Promise<ResWorks> =>
  await apiClient.api.v1.works.$get({
    query,
  });
