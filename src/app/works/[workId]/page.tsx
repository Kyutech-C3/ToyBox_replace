import type { FC } from 'react';

import { Screen } from '@/components/page/WorkDetail';

type Props = {
  params: {
    workId: string;
  };
};

const WorkDetail: FC<Props> = ({ params }) => <Screen params={params} />;

export default WorkDetail;
