'use client';

import type { FC } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { worksRepository } from '../../../repository';

import { WorkCardsPresentation } from './main';

export const WorkCardsContainer: FC = async () => {
  const params = useSearchParams();
  const currentPage = parseInt(params.get('page') || '1');
  const router = useRouter();
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
      handleNextPage={(page) => router.push(`/?page=${page}`)}
    />
  );
};
