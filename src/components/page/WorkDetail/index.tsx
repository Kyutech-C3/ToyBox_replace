import type { FC } from 'react';

import { WorkDetail } from '@/domains/Work/components';

type Props = {
  params: {
    workId: string;
  };
};
export const Screen: FC<Props> = ({ params: { workId } }) => (
  <WorkDetail workId={workId} />
);
