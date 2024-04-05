import type { FC, ReactNode } from 'react';

import { List } from '@/components/ui/List';
import { Skeleton } from '@/components/ui/Skeleton';

const TagSkeleton = (): ReactNode => <Skeleton className="w-24 h-6" />;

export const TagListLoading: FC = () => (
  <List className="flex-wrap gap-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <TagSkeleton key={index} />
    ))}
  </List>
);
