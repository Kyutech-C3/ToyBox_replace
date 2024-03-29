import type { FC } from 'react';

import { Grid } from 'lucide-react';

import { WorkCardLoading } from '../../WorkCard/presentations';

import { GridItem } from '@/components/ui/Grid';

export const WorkCardsLoadingPresentation: FC = () => (
  <Grid className="gap-x-6 gap-y-12">
    {Array.from({ length: 6 }).map((_, index) => (
      <GridItem key={index}>
        <WorkCardLoading />
      </GridItem>
    ))}
  </Grid>
);
