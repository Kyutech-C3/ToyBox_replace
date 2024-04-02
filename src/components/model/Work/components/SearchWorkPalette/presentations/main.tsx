import type { FC } from 'react';

import clsx from 'clsx';
import { Search } from 'lucide-react';

import type { GetWorksQuery } from '../../../types';
import type { Visibility } from '@/api/@types';
import type { Tag } from '@/components/model/Tag';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { List, ListItem } from '@/components/ui/List';
import { Typography } from '@/components/ui/Typography';

type Props = {
  tags: Tag[];
  query: GetWorksQuery;
  keyword: string;
  setSearchWord: (searchWord: string) => void;
  handleChangeKeyword: (keyword: string) => void;
  handleChangeTagId: (tagId: string) => void;
  handleChangeVisibility: (visibility: Visibility) => void;
};

export const SearchWorkPalettePresentation: FC<Props> = ({
  tags,
  query,
  keyword,
  handleChangeKeyword,
  handleChangeTagId,
}: Props) => (
  <Horizontal className="shadow-2xl shadow-orange-white h-[500px] w-[300px]">
    <Vertical className="bg-orange-pop p-1 items-center rounded-md flex-grow gap-1">
      <Search className="aspect-square h-full ml-1" color="white" />
      <Input
        className="flex-grow border-orange-pop text-xs h-8"
        value={keyword}
        onChange={(e) => {
          handleChangeKeyword(e.target.value);
        }}
      />
    </Vertical>
    <div className="border-orange-pop border-2 rounded-md p-4 h-full overflow-scroll">
      <Typography className="text-xs">すべてのタグ</Typography>
      <List wrap="nowrap">
        {tags?.map((tag) => (
          <ListItem key={tag.id}>
            <Button
              className={clsx(
                'border-orange-pop hover:bg-orange-sub border-2 bg-white text-black h-6 py-0.5',
                {
                  'bg-orange-pop border-orange-sub text-white':
                    query.tagIds?.includes(tag.id),
                }
              )}
              onClick={() => handleChangeTagId(tag.id)}
            >
              {tag.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  </Horizontal>
);
