import type { FC } from 'react';

import { useSearchWorkPalette } from '../hooks';

import { SearchWorkPalettePresentation } from './main';

export const SearchWorkPaletteContainer: FC = () => {
  const {
    tags,
    query,
    keyword,
    setSearchWord,
    handleChangeKeyword,
    handleChangeTagId,
    handleChangeVisibility,
  } = useSearchWorkPalette();

  return (
    <SearchWorkPalettePresentation
      tags={tags}
      query={query}
      keyword={keyword}
      setSearchWord={setSearchWord}
      handleChangeKeyword={handleChangeKeyword}
      handleChangeTagId={handleChangeTagId}
      handleChangeVisibility={handleChangeVisibility}
    />
  );
};
