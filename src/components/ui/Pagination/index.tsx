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
import { restrictRange } from './logic/restrictRange';

import type { PositiveInteger } from '@/types';

import { Button } from '@/components/ui/Button';

type Props<T extends number> = {
  handleClick: (page: number) => void;
  totalPage: number;
  currentPage: number;
  displayRange?: PositiveInteger<T>;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Pagination = <T extends number>(props: Props<T>) => {
  const { handleClick, totalPage, currentPage, displayRange = 1 } = props;

  // Format current page to be between 1 and totalPage ( 1 <= currentPage <= totalPage )
  const formatCurrentPage = restrictRange(currentPage, 1, totalPage);

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
