import type { FC } from 'react';

import { Card, CardContent } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';

export const WorkCardLoading: FC = () => (
  <Card className="p-2 w-60 h-80">
    <Skeleton className="aspect-thumbnail rounded-sm" />
    <CardContent className="flex p-0 gap-3 flex-col pt-4 px-2">
      <Skeleton className="w-24 h-6" />
      <TagLoading />
      <div>
        <UserLoading />
        <div className="flex-grow text-end float-end">
          <Skeleton className="w-20 h-4" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const TagLoading: FC = () => (
  <div className="flex flex-row gap-2 pb-2">
    {Array.from({ length: 3 }, (_, i) => (
      <Skeleton key={i} className="w-12 h-4" />
    ))}
  </div>
);

const UserLoading: FC = () => (
  <div className="flex items-center gap-2">
    <Skeleton className="w-6 h-6 rounded-full" />
    <div className="flex flex-col">
      <Skeleton className="w-20 h-4" />
    </div>
  </div>
);
