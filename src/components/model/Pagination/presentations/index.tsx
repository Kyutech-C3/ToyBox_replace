import type { FC } from 'react';

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

import {
  getMiddleRange,
  isLeftDotsRequired,
  isPageOneRequired,
  isRightDotsRequired,
  isTotalPageRequired,
} from '../logic/CheckElementRequired';

import type { Props } from '..';

import { Button } from '@/components/ui/Button';

function getDots(): JSX.Element {
  return <MoreHorizontal size={24} />;
}

function getPageButton(
  page: number,
  handleClick: (page: number) => void,
  isCurrentPage: boolean = false
): JSX.Element | null {
  return (
    <Button
      key={page}
      variant={isCurrentPage ? 'default' : 'outline'}
      className="rounded-full aspect-square p-2 text-lg font-bold"
      onClick={(): void => handleClick(page)}
    >
      {page}
    </Button>
  );
}

export const PaginationPresentation: FC<Props> = (props) => {
  const { currentPage, handleClick, totalPage, displayRange = 1 } = props;

  return (
    <div className="flex flex-row items-center space-x-5">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        className="rounded-full aspect-square p-2"
        onClick={(): void => handleClick(currentPage - 1)}
      >
        <ChevronLeft />
      </Button>

      {isPageOneRequired(currentPage, displayRange) &&
        getPageButton(1, handleClick)}
      {isLeftDotsRequired(currentPage, displayRange) && getDots()}

      {getMiddleRange(currentPage, totalPage, displayRange).map((page) =>
        getPageButton(page, handleClick, page === currentPage)
      )}

      {isRightDotsRequired(currentPage, totalPage, displayRange) && getDots()}
      {isTotalPageRequired(currentPage, totalPage, displayRange) &&
        getPageButton(totalPage, handleClick)}

      <Button
        variant="outline"
        disabled={currentPage === totalPage}
        className="rounded-full aspect-square p-2"
        onClick={(): void => handleClick(currentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};
