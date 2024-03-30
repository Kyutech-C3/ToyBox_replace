import { useWorkQuery } from '../hooks/workQuery';
import { useWorkRepository } from '../repository';
import { genGetWorkKey } from '../utils';

import type { IWorkRepository } from '../repository';
import type { Works } from '../types';

import useSWR from '@/libs/fetch';

export type ICreateNewWorkUsecase = {
  workRepository: IWorkRepository;
};

export type IWorkUsecase = {
  works: Works;
  totalCount: number;
};

export const useWorkUsecase = (): IWorkUsecase => {
  const workRepository = useWorkRepository();
  const { query } = useWorkQuery();
  const { data: works } = useSWR(
    genGetWorkKey(query),
    () => workRepository.getWorks(query),
    { suspense: true }
  );
  return {
    works: works.works,
    totalCount: works.totalCount,
  };
};
