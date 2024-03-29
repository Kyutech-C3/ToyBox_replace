import { useAtomValue } from 'jotai';
import useSWR from 'swr';

import { useWorkRepository } from '../repository';
import { genGetWorkKey } from '../utils';

import type { IWorkRepository } from '../repository';
import type { Works } from '../types';

import { worksQueryAtom } from '@/state/worksQuery';

export type ICreateNewWorkUsecase = {
  workRepository: IWorkRepository;
};

export type IWorkUsecase = {
  works: Works;
  totalCount: number;
};

export const useWorkUsecase = (): IWorkUsecase => {
  const workRepository = useWorkRepository();
  const query = useAtomValue(worksQueryAtom);
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
