import type { FC } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Dots } from './items/Dots';
import { PageButton } from './items/PageButton';
import {
  getMiddleRange,
  isLeftDotsRequired,
  isPageOneRequired,
  isRightDotsRequired,
  isTotalPageRequired,
} from './logic/CheckElementRequired';

import { Button } from '@/components/ui/Button';

type Props = {
  handleClick: (page: number) => void;
  totalPage: number;
  currentPage: number;
  displayRange?: number;
};

export const Pagination: FC<Props> = ({
  currentPage,
  handleClick,
  totalPage,
  displayRange = 1,
}) => {
  const formatCurrentPage = currentPage > totalPage ? totalPage : currentPage;

  return (
    <div className="flex flex-row items-center space-x-5">
      <Button
        variant="outline"
        disabled={formatCurrentPage === 1}
        className="rounded-full aspect-square p-2"
        onClick={(): void => handleClick(formatCurrentPage - 1)}
      >
        <ChevronLeft />
      </Button>

      {isPageOneRequired(formatCurrentPage, displayRange) && (
        <PageButton page={1} handleClick={handleClick} />
      )}
      {isLeftDotsRequired(formatCurrentPage, displayRange) && <Dots />}

      {getMiddleRange(formatCurrentPage, totalPage, displayRange).map(
        (page) => (
          <PageButton
            key={page}
            page={page}
            handleClick={handleClick}
            isCurrentPage={page === formatCurrentPage}
          />
        )
      )}

      {isRightDotsRequired(formatCurrentPage, totalPage, displayRange) && (
        <Dots />
      )}
      {isTotalPageRequired(formatCurrentPage, totalPage, displayRange) && (
        <PageButton page={totalPage} handleClick={handleClick} />
      )}

      <Button
        variant="outline"
        disabled={formatCurrentPage === totalPage}
        className="rounded-full aspect-square p-2"
        onClick={(): void => handleClick(formatCurrentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};
