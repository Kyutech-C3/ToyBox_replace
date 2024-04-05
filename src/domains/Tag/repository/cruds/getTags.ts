import type { GetTag } from '@/api/@types';

import { apiClient } from '@/libs/apiClient';

export const getTags = async (searchWord: string): Promise<GetTag[]> =>
  await apiClient.api.v1.tags.$get({
    query: { w: searchWord },
    config: {
      headers: {
        'No-Access-Control-Allow-Origin': 'true',
      },
    },
  });
