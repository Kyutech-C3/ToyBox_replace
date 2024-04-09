'use client';

import type { FC } from 'react';

import { useTagSearchResult } from '../hooks';

import { TagSearchResultEmptyPresentation } from './empty';
import { TagSearchResultPresentation } from './main';

import type { Tag } from '@/domains/Tag/types';

type Props = {
  handleClickTag: (tag: Tag) => void;
};
export const TagSearchResultContainer: FC<Props> = ({ handleClickTag }) => {
  const { isEmpty, tags } = useTagSearchResult();
  if (isEmpty) {
    return <TagSearchResultEmptyPresentation />;
  }
  return (
    <TagSearchResultPresentation tags={tags} handleClickTag={handleClickTag} />
  );
};
