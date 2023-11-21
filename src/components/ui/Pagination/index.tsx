import type { FC } from 'react';

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

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

const Dots: FC = () => <MoreHorizontal size={24} />;

type PageButtonProps = {
  page: number;
  handleClick: (page: number) => void;
  isCurrentPage?: boolean;
};

const PageButton: FC<PageButtonProps> | null = (props) => {
  const { page, handleClick, isCurrentPage = false } = props;

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
};

export const Pagination: FC<Props> = ({
  currentPage,
  handleClick,
  totalPage,
  displayRange = 1,
}) => {
  const fixedCurrentPage = currentPage > totalPage ? totalPage : currentPage;

  return (
    <div className="flex flex-row items-center space-x-5">
      <Button
        variant="outline"
        disabled={fixedCurrentPage === 1}
        className="rounded-full aspect-square p-2"
        onClick={(): void => handleClick(fixedCurrentPage - 1)}
      >
        <ChevronLeft />
      </Button>

      {isPageOneRequired(fixedCurrentPage, displayRange) && (
        <PageButton page={1} handleClick={handleClick} />
      )}
      {isLeftDotsRequired(fixedCurrentPage, displayRange) && <Dots />}

      {getMiddleRange(fixedCurrentPage, totalPage, displayRange).map((page) => (
        <PageButton
          key={page}
          page={page}
          handleClick={handleClick}
          isCurrentPage={page === fixedCurrentPage}
        />
      ))}

      {isRightDotsRequired(fixedCurrentPage, totalPage, displayRange) && (
        <Dots />
      )}
      {isTotalPageRequired(fixedCurrentPage, totalPage, displayRange) && (
        <PageButton page={totalPage} handleClick={handleClick} />
      )}

      <Button
        variant="outline"
        disabled={fixedCurrentPage === totalPage}
        className="rounded-full aspect-square p-2"
        onClick={(): void => handleClick(fixedCurrentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};
