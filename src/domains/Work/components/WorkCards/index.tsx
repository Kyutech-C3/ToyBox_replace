import type { FC } from 'react';
import { Suspense } from 'react';

import { worksRepository } from '../../repository';

import { WorkCardsContainer } from './presentations';
import { WorkCardsErrorPresentation } from './presentations/error';
import { WorkCardsLoadingPresentation } from './presentations/loading';

import { ErrorBoundary } from '@/libs/ErrorBoundary';

type Props = {
  page: number;
};
export const WorkCards: FC<Props> = ({ page }) => (
  <ErrorBoundary fallback={<WorkCardsErrorPresentation />}>
    <Suspense fallback={<WorkCardsLoadingPresentation />}>
      <WorkCardsFetchContainer page={page} />
    </Suspense>
  </ErrorBoundary>
);

const WorkCardsFetchContainer: FC<{ page: number }> = async ({ page }) => {
  const { works, totalCount } = await worksRepository.getWorks({
    query: {
      page,
    },
  });
  console.log(totalCount);
  return (
    <WorkCardsContainer
      works={works}
      currentPage={page}
      totalPage={
        Math.ceil(totalCount / 30) == 0 ? 1 : Math.ceil(totalCount / 30)
      }
    />
  );
};
