import { convertCreateWork, convertWorkDetail, convertWorks } from '../utils';
import { AssetConverter } from '../utils/converter/asset';
import { workQueryConverter } from '../utils/converter/workQuery';

import { getWorkById, getWorks, postAsset } from './cruds';
import { createWork } from './cruds/createWork';

import type { DefaultWork } from '../components/WorkEdit';
import type { Asset, GetWorksQuery, Work, WorkDetail, Works } from '../types';
import type { AssetType } from '@/api/@types';

export type IWorkRepository = {
  getWorksKey: (query: GetWorksQuery) => { url: string; query: GetWorksQuery };
  getWorkByIdKey: (workId: string) => { url: string; workId: string };
  getWorks: ({
    query,
  }: {
    query: GetWorksQuery;
  }) => Promise<{ works: Works; totalCount: number }>;
  getWorkById: ({ workId }: { workId: Work['id'] }) => Promise<WorkDetail>;
  uploadAsset: ({
    assetType,
    file,
  }: {
    assetType: AssetType;
    file: File;
  }) => Promise<Asset>;
  createWork: ({
    work,
    postDiscord,
  }: {
    work: DefaultWork;
    postDiscord: boolean;
  }) => Promise<WorkDetail>;
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
  uploadAsset: async ({ assetType, file }) =>
    AssetConverter(await postAsset(assetType, file)),
  createWork: async ({ work, postDiscord }) =>
    convertWorkDetail(await createWork(convertCreateWork(work), postDiscord)),
};
