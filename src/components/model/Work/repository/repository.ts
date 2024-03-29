import { convertWorks } from '../utils';
import { workQueryConverter } from '../utils/converter/workQuery';

import { getWorks } from './cruds';

import type { GetWorksQuery, Works } from '../types';

import { useApiClient } from '@/hooks/useApiClient';

export type IWorkRepository = {
  getWorks: (
    query: GetWorksQuery
  ) => Promise<{ works: Works; totalCount: number }>;
};

export const useWorkRepository = (): IWorkRepository => {
  const { client: queryClient } = useApiClient();
  return {
    getWorks: async (query: GetWorksQuery) =>
      convertWorks(await getWorks(queryClient, workQueryConverter(query))),
  };
};
