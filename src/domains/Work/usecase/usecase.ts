import { useWorkQuery } from '../hooks/workQuery';
import { worksRepository } from '../repository';
import { genGetWorkKey } from '../utils';

import type { WorkDetail, Works } from '../types';

import useSWR from '@/libs/fetch';

export type IWorksUsecase = {
  works: Works;
  totalCount: number;
};

export const useWorksUsecase = (): IWorksUsecase => {
  const { query } = useWorkQuery();
  const { data: works } = useSWR(
    genGetWorkKey(query),
    worksRepository.getWorks,
    {
      suspense: true,
    }
  );
  return {
    works: works.works,
    totalCount: works.totalCount,
  };
};

export type IWorkUsecase = {
  work: WorkDetail;
};

export const useWorkUsecase = (workId: string): IWorkUsecase => {
  const { data: work } = useSWR(
    worksRepository.getWorkByIdKey(workId),
    worksRepository.getWorkById,
    {
      suspense: true,
    }
  );
  return {
    work: work,
  };
};
