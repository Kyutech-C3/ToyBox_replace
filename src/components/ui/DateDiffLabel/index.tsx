import type { FC } from 'react';

import { DateToDiffLabel } from './logic';

type Prop = {
  date: Date;
  now?: Date;
  className?: string;
};

export const DateDiffLabel: FC<Prop> = ({
  date,
  now = new Date(),
  className,
}) => (
  <time className={className} dateTime={date.toISOString()}>
    {DateToDiffLabel(date, now)}
  </time>
);
