'use client';

import type { FC } from 'react';

import { Vertical } from '@/components/Layout/Vertical';
import { WithFooter } from '@/components/Layout/WithFooter';
import { WithHeader } from '@/components/Layout/WithHeader';
import {
  SearchWorkPalette,
  WorkCards,
} from '@/components/model/Work/components';

export const Screen: FC = () => (
  <WithHeader className="h-screen flex flex-col">
    <Vertical className="gap-16 flex-grow" as="main">
      <WithFooter className="px-8">
        <SearchWorkPalette />
      </WithFooter>
      <WorkCards />
    </Vertical>
  </WithHeader>
);
