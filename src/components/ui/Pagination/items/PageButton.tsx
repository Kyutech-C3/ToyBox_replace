import type { FC } from 'react';

import { Button } from '@/components/ui/Button';

type Props = {
  page: number;
  handleClick: (page: number) => void;
  isCurrentPage?: boolean;
};

export const PageButton: FC<Props> = (props) => {
  const { page, handleClick, isCurrentPage = false } = props;

  return (
    <Button
      variant={isCurrentPage ? 'default' : 'outline'}
      className="rounded-full aspect-square p-2 text-lg font-bold"
      onClick={(): void => handleClick(page)}
    >
      {page}
    </Button>
  );
};
