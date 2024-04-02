import { convertWorkDetail, convertWorks } from '../utils';
import { workQueryConverter } from '../utils/converter/workQuery';

import { getWorks } from './cruds';
import { getWorkById } from './cruds/getWorkById';

import type { GetWorksQuery, Work, WorkDetail, Works } from '../types';

export type IWorkRepository = {
  getWorksKey: (query: GetWorksQuery) => { url: string; query: GetWorksQuery };
  getWorkByIdKey: (workId: string) => { url: string; workId: string };
  getWorks: ({
    query,
  }: {
    query: GetWorksQuery;
  }) => Promise<{ works: Works; totalCount: number }>;
  getWorkById: ({ workId }: { workId: Work['id'] }) => Promise<WorkDetail>;
};

export const worksRepository: IWorkRepository = {
  getWorksKey: (query) => ({ url: '/works', query }),
  getWorkByIdKey: (workId) => ({
    url: `/works/${workId}`,
    workId,
  }),
  getWorks: async ({ query }) =>
    convertWorks(await getWorks(workQueryConverter(query))),
  getWorkById: async ({ workId }) =>
    convertWorkDetail(await getWorkById(workId)),
};
