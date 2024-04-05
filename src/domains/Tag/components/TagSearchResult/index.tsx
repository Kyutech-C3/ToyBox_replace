import type { FC } from 'react';
import { Suspense } from 'react';

import { TagListLoading } from '../TagList';

import { TagSearchResultContainer } from './presentations';
import { TagSearchResultErrorPresentation } from './presentations/error';

import type { Tag } from '../../types';

import { ErrorBoundary } from '@/libs/ErrorBoundary';

type Props = {
  handleClickTag: (tag: Tag) => void;
};

export const TagSearchResult: FC<Props> = ({ handleClickTag }) => (
  <ErrorBoundary fallback={<TagSearchResultErrorPresentation />}>
    <Suspense fallback={<TagListLoading />}>
      <TagSearchResultContainer handleClickTag={handleClickTag} />
    </Suspense>
  </ErrorBoundary>
);
