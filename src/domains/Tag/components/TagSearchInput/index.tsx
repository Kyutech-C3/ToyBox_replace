'use client';

import type { FC } from 'react';

import { useTagUsecase } from '../../usecase/usecase';

import { TagSearchInputPresentation } from './presentations';

export const TagSearchInput: FC = () => {
  const { setSearchWord, searchWord } = useTagUsecase();
  return (
    <TagSearchInputPresentation
      searchWord={searchWord}
      setSearchWord={setSearchWord}
    />
  );
};
