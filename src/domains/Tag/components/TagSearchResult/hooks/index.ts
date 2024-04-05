import type { Tag } from '@/domains/Tag/types';

import { useTagUsecase } from '@/domains/Tag/usecase/usecase';

type IUseTagSearchResult = {
  tags: Tag[];
  isEmpty: boolean;
};

export const useTagSearchResult = (): IUseTagSearchResult => {
  const { tags } = useTagUsecase();
  return { tags, isEmpty: tags !== undefined && tags.length === 0 };
};
