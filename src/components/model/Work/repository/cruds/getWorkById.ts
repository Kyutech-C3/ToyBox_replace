import type { Work } from '@/api/@types';

import { apiClient } from '@/hooks/useApiClient';

export const getWorkById = async (workId: string): Promise<Work> =>
  await apiClient.api.v1.works._work_id(workId).$get({
    config: {},
  });
