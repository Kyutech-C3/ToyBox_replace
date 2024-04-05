'use client';

import { useEffect, useState } from 'react';

import { useWorkQuery } from '../../../hooks/workQuery';

import type { Visibility } from '@/api/@types';

import { useTagUsecase } from '@/domains/Tag/usecase/usecase';

export type IUseSearchWorkPalette = {
  keyword: string;
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
  } = useWorkQuery();

  const { setSearchWord } = useTagUsecase();
  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      searchWord(keyword);
    }, 500);
    return () => clearTimeout(timer);
  }, [keyword, searchWord]);
  return {
    keyword,
    setSearchWord,
    handleChangeKeyword: (keyword: string) => setKeyword(keyword),
    handleChangeTagId,
    handleChangeVisibility,
  };
};
