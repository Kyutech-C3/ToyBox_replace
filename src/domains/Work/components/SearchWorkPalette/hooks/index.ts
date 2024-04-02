'use client';

import { useEffect, useState } from 'react';

import { useWorkQuery } from '../../../hooks/workQuery';

import type { GetWorksQuery } from '../../../types';
import type { Visibility } from '@/api/@types';
import type { Tag } from '@/domains/Tag';

import { useTagUsecase } from '@/domains/Tag/usecase/usecase';

export type IUseSearchWorkPalette = {
  tags: Tag[];
  keyword: string;
  query: GetWorksQuery;
  setSearchWord: (searchWord: string) => void;
  handleChangeKeyword: (keyword: string) => void;
  handleChangeTagId: (tagId: string) => void;
  handleChangeVisibility: (visibility: Visibility) => void;
};

export const useSearchWorkPalette = (): IUseSearchWorkPalette => {
  const {
    handleChangeKeyword: searchWord,
    handleChangeTagId,
    handleChangeVisibility,
    query,
  } = useWorkQuery();

  const { tags, setSearchWord } = useTagUsecase();
  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      searchWord(keyword);
    }, 500);
    return () => clearTimeout(timer);
  }, [keyword, searchWord]);
  return {
    tags,
    keyword,
    query,
    setSearchWord,
    handleChangeKeyword: (keyword: string) => setKeyword(keyword),
    handleChangeTagId,
    handleChangeVisibility,
  };
};
