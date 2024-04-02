import { tagsConverter } from '../utils';

import { getTags } from './cruds/getTags';

import type { Tag } from '../types';

type IUseTagRepository = {
  getTags: (searchWord: string) => Promise<Tag[]>;
};
export const useTagRepository = (): IUseTagRepository => ({
  getTags: async (searchWord: string): Promise<Tag[]> =>
    tagsConverter(await getTags(searchWord)),
});
