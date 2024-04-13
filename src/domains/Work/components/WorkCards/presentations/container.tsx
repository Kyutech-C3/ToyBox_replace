'use client';

import type { FC } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { WorkCardsPresentation } from './main';

import type { Works } from '@/domains/Work/types';

type Props = {
  currentPage: number;
  totalPage: number;
  works: Works;
};
export const WorkCardsContainer: FC<Props> = ({ works, totalPage }) => {
  const params = useSearchParams();
  const currentPage = parseInt(params.get('page') || '1');
  const router = useRouter();

  return (
    <WorkCardsPresentation
      currentPage={currentPage}
      works={works}
      totalPage={totalPage}
      handleNextPage={(page: number) => router.push(`/?page=${page}`)}
    />
  );
};
