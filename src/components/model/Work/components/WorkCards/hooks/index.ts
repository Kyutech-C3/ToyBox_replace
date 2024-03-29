import { createNewWorkRepository } from '../../../repository';
import { createNewWorkUsecase } from '../../../usecase';

import type { Works } from '../../../types';

import { useApiClient } from '@/hooks/useApiClient';

type IUseWorkCards = {
  isEmpty: boolean;
  works: Works;
};

export const useWorkCards = (): IUseWorkCards => {
  const { client } = useApiClient();
  const workRepository = createNewWorkRepository(client);
  const workUsecase = createNewWorkUsecase({ workRepository });
  const works = workUsecase.useGetWorksUsecase();
  return { isEmpty: works.length === 0, works };
};
