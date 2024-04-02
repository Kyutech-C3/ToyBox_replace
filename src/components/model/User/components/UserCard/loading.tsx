import type { FC } from 'react';

import { Skeleton } from '@/components/ui/Skeleton';

export const UserCardLoading: FC = () => (
  <div className="flex items-center gap-2">
    <Skeleton className="w-6 h-6 rounded-full" />
    <div className="flex flex-col">
      <Skeleton className="w-20 h-4" />
    </div>
  </div>
);
