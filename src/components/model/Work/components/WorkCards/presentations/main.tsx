import type { FC } from 'react';

import { WorkCard } from '../../WorkCard/presentations';

import type { Works } from '../../../types';

import { Grid, GridItem } from '@/components/ui/Grid';

type Props = { works: Works };

export const WorkCardsPresentation: FC<Props> = ({ works }) => (
  <Grid className=" gap-x-6 gap-y-12">
    {works?.map((work) => (
      <GridItem key={work.id}>
        <WorkCard {...work} />
      </GridItem>
    ))}
  </Grid>
);
