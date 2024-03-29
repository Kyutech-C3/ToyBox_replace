import type { FC } from 'react';
import { Suspense } from 'react';

import { WorkCardsContainer } from './presentations';
import { WorkCardsErrorPresentation } from './presentations/error';
import { WorkCardsLoadingPresentation } from './presentations/loading';

import { ErrorBoundary } from '@/libs/ErrorBoundary';

export const WorkCards: FC = () => (
  <ErrorBoundary fallback={<WorkCardsErrorPresentation />}>
    <Suspense fallback={<WorkCardsLoadingPresentation />}>
      <WorkCardsContainer />
    </Suspense>
  </ErrorBoundary>
);
