import { useState } from 'react';

import { useTagRepository } from '../repository';
import { genGetTagKey } from '../utils';

import type { Tag } from '../types';

import useSWR from '@/libs/fetch';

type IUseTagUsecase = {
  searchWord: string;
  setSearchWord: (searchWord: string) => void;
  tags: Tag[];
};
export const useTagUsecase = (): IUseTagUsecase => {
  const { getTags } = useTagRepository();
  const [searchWord, setSearchWord] = useState<string>('');
  const { data: tags } = useSWR(
    genGetTagKey(searchWord),
    () => getTags(searchWord),
    {
      suspense: true,
      fallbackData: [],
    }
  );
  return {
    searchWord,
    setSearchWord: (searchWord: string): void => setSearchWord(searchWord),
    tags: tags,
  };
};
