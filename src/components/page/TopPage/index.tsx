import type { FC } from 'react';

import { Vertical } from '@/components/Layout/Vertical';
import { WithFooter } from '@/components/Layout/WithFooter';
import {
  SearchWorkPalette,
  WorkCards,
} from '@/components/model/Work/components';

export const Screen: FC = () => (
  <Vertical className="gap-16 flex-grow" as="main">
    <div className=" sticky top-24 h-[800px]">
      <WithFooter className="px-8">
        <SearchWorkPalette />
      </WithFooter>
    </div>
    <WorkCards />
  </Vertical>
);
