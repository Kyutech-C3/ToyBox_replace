import { useWorksUsecase } from '../../../usecase';

import type { Works } from '../../../types';

type IUseWorkCards = {
  isEmpty: boolean;
  works: Works;
};

export const useWorkCards = (): IUseWorkCards => {
  const { works } = useWorksUsecase();

  return { isEmpty: works.length === 0, works };
};
