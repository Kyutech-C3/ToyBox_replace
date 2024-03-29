import { atom } from 'jotai';

import type { GetWorksQuery } from '@/components/model/Work';

export const worksQueryAtom = atom<GetWorksQuery>({
  page: undefined,
  limit: undefined,
  visibility: undefined,
  tagNames: undefined,
  tagIds: undefined,
  searchWord: undefined,
});
