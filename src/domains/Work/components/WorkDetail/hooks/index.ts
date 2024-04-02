import { useWorkUsecase } from '../../../usecase';

import type { WorkDetail } from '../../../types';

type IUseWorkDetail = {
  work: WorkDetail;
};

export const useWorkDetail = (workId: string): IUseWorkDetail => {
  const { work } = useWorkUsecase(workId);
  return { work };
};
