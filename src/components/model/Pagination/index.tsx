import type { FC } from 'react';

import { PaginationPresentation } from './presentations';
import { PaginationErrorPresentation } from './presentations/error';

import { ErrorBoundary } from '@/libs/ErrorBoundary';

export type Props = {
  handleClick: (page: number) => void;
  totalPage: number;
  currentPage: number;
  displayRange?: number;
};

export const Pagination: FC<Props> = (props) => (
  <ErrorBoundary fallback={<PaginationErrorPresentation />}>
    <PaginationPresentation {...props} />
  </ErrorBoundary>
);
