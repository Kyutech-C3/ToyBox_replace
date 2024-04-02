import type { FC } from 'react';

import { WorkCard } from '../../WorkCard/presentations';

import type { Works } from '../../../types';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Grid, GridItem } from '@/components/ui/Grid';
import { Pagination } from '@/components/ui/Pagination';

type Props = {
  currentPage: number;
  totalPage: number;
  handleNextPage: (page: number) => void;
  works: Works;
};

export const WorkCardsPresentation: FC<Props> = ({
  works,
  handleNextPage,
  currentPage,
  totalPage,
}) => (
  <Horizontal className="items-center">
    <Grid className="gap-x-6 gap-y-12">
      {works?.map((work) => (
        <GridItem key={work.id}>
          <WorkCard clickable work={work} />
        </GridItem>
      ))}
    </Grid>
    <div className="px-4 py-24">
      <Pagination
        handleClick={handleNextPage}
        totalPage={totalPage}
        currentPage={currentPage}
        displayRange={3}
      />
    </div>
  </Horizontal>
);
