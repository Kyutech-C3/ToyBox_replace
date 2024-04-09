import type { FC } from 'react';

import { worksRepository } from '../../../repository';

import { WorkDetailPresentation } from './main';

import type { Work } from '../../../types';

type Props = {
  workId: Work['id'];
};
export const WorkDetailContainer: FC<Props> = async ({ workId }) => {
  const work = await worksRepository.getWorkById({ workId });
  return <WorkDetailPresentation work={work} />;
};
