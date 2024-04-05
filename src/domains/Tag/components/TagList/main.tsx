import type { ReactNode, FC } from 'react';

import type { Tag } from '../../types';

import { List, ListItem } from '@/components/ui/List';
import { cn } from '@/libs/utils';

type Props = {
  tags: Tag[];
  render?: (tag: Tag) => ReactNode;
  className?: string;
};

export const defaultTagClassName =
  'border-orange-pop hover:bg-orange-sub border-2 bg-white text-black h-6 py-0.5 content-center rounded-sm px-2 text-sm font-bold';

const tagRender = (tag: Tag): ReactNode => (
  <ListItem key={tag.id} className={defaultTagClassName}>
    {tag.name}
  </ListItem>
);

export const TagList: FC<Props> = ({
  tags,
  className,
  render = tagRender,
}: Props) => (
  <List className={cn('flex-nowrap gap-1', className)}>
    {tags.map((tag) => render(tag))}
  </List>
);
