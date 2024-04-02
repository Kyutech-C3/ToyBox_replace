import { atom } from 'jotai';

import type { GetWorksQuery } from '@/domains/Work';

export const worksQueryAtom = atom<GetWorksQuery>({
  page: 1,
  limit: 30,
  visibility: 'public',
  tagNames: [],
  tagIds: [],
  searchWord: '',
});
