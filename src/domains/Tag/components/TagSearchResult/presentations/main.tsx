import type { FC } from 'react';

import { TagList, defaultTagClassName } from '../../TagList';

import type { Tag } from '@/domains/Tag/types';

import { Button } from '@/components/ui/Button';

type Props = {
  tags: Tag[];
  handleClickTag: (tag: Tag) => void;
};

export const TagSearchResultPresentation: FC<Props> = ({
  tags,
  handleClickTag,
}: Props) => (
  <TagList
    className="flex-wrap"
    tags={tags}
    render={(tag) => (
      <Button
        className={defaultTagClassName}
        onClick={() => {
          handleClickTag(tag);
        }}
      >
        {tag.name}
      </Button>
    )}
  />
);
