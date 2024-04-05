import type { FC } from 'react';

import { Vertical } from '@/components/Layout/Vertical';
import { WithFooter } from '@/components/Layout/WithFooter';
import { SearchWorkPalette } from '@/domains/Work/components/SearchWorkPalette';
import { WorkCards } from '@/domains/Work/components/WorkCards';

export const Screen: FC = () => (
  <Vertical className="gap-16 flex-grow" as="main">
    <div className=" sticky top-24 h-[200px]">
      <WithFooter className="px-8">
        <SearchWorkPalette />
      </WithFooter>
    </div>
    <WorkCards />
  </Vertical>
);
