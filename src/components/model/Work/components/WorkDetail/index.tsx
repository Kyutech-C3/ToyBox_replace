import type { FC } from 'react';
import { Suspense } from 'react';

import { WorkDetailContainer } from './presentations';
import { WorkDetailErrorPresentation } from './presentations/error';
import { WorkDetailLoadingPresentation } from './presentations/loading';

import type { Work } from '../../types';

import { ErrorBoundary } from '@/libs/ErrorBoundary';

type Props = {
  workId: Work['id'];
};

export const WorkDetail: FC<Props> = ({ workId }) => (
  <ErrorBoundary fallback={<WorkDetailErrorPresentation />}>
    <Suspense fallback={<WorkDetailLoadingPresentation />}>
      <WorkDetailContainer workId={workId} />
    </Suspense>
  </ErrorBoundary>
);
