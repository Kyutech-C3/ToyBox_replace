import { tagsConverter } from '../utils';

import { getTags } from './cruds/getTags';

import type { Tag } from '../types';

import { useApiClient } from '@/hooks/useApiClient';

type IUseTagRepository = {
  getTags: (searchWord: string) => Promise<Tag[]>;
};
export const useTagRepository = (): IUseTagRepository => {
  const { client: apiClient } = useApiClient();
  return {
    getTags: async (searchWord: string): Promise<Tag[]> =>
      tagsConverter(await getTags(apiClient, searchWord)),
  };
};
