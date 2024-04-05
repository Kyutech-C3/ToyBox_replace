'use client';

import type { FC } from 'react';

import { useWorkEdit } from '../hooks';

import { WorkEditPresentation } from './main';

import type { DefaultWork } from '..';
type Props = {
  defaultWork: DefaultWork | undefined;
};
export const WorkEditContainer: FC<Props> = ({ defaultWork }) => {
  const items = useWorkEdit(defaultWork);

  return <WorkEditPresentation {...items} defaultWork={defaultWork} />;
};
