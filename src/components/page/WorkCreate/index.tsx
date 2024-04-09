import type { FC } from 'react';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Center } from '@/components/ui/Center';
import { Typography } from '@/components/ui/Typography';
import { WorkEdit } from '@/domains/Work/components/WorkEdit';

export const Screen: FC = () => (
  <Center>
    <Horizontal className="max-w-[1000px] w-full">
      <Typography variant="h1">作品投稿</Typography>
      <div className="px-12">
        <WorkEdit />
      </div>
    </Horizontal>
  </Center>
);
