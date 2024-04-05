'use client';

import type { FC } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { worksRepository } from '../../../repository';

import { WorkCardsPresentation } from './main';

const WorkCardsFetchContainer: FC<{
  currentPage: number;
  handleNextPage: (page: number) => void;
}> = async ({ currentPage, handleNextPage }) => {
  const { works, totalCount } = await worksRepository.getWorks({
    query: {
      page: currentPage,
    },
  });
  return (
    <WorkCardsPresentation
      works={works}
      totalPage={Math.round(totalCount / 30)}
      currentPage={currentPage}
      handleNextPage={handleNextPage}
    />
  );
};

export const WorkCardsContainer: FC = () => {
  const params = useSearchParams();
  const currentPage = parseInt(params.get('page') || '1');
  const router = useRouter();
  return (
    <WorkCardsFetchContainer
      currentPage={currentPage}
      handleNextPage={(page: number) => router.push(`/?page=${page}`)}
    />
  );
};
