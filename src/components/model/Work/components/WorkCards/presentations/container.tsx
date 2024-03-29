import type { FC } from 'react';

import { useWorkCards } from '../hooks';

import { WorkCardsEmptyPresentation } from './empty';
import { WorkCardsPresentation } from './main';

export const WorkCardsContainer: FC = () => {
  const { isEmpty, works } = useWorkCards();
  if (isEmpty) {
    return <WorkCardsEmptyPresentation />;
  }
  return <WorkCardsPresentation works={works} />;
};
