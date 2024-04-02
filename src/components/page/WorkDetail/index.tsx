import type { FC } from 'react';

import { WorkDetail } from '@/components/model/Work/components';

type Props = {
  params: {
    workId: string;
  };
};
export const Screen: FC<Props> = ({ params: { workId } }) => (
  <WorkDetail workId={workId} />
);
