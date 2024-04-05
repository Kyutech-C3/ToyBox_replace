import type { FC } from 'react';

import { Search } from 'lucide-react';

import type { Visibility } from '@/api/@types';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import { Input } from '@/components/ui/Input';
import { TagSearchBox } from '@/domains/Tag/components/TagSearchBox';

type Props = {
  keyword: string;
  setSearchWord: (searchWord: string) => void;
  handleChangeKeyword: (keyword: string) => void;
  handleChangeTagId: (tagId: string) => void;
  handleChangeVisibility: (visibility: Visibility) => void;
};

export const SearchWorkPalettePresentation: FC<Props> = ({
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
    <TagSearchBox handleTagClick={(tag) => handleChangeTagId(tag.id)} />
  </Horizontal>
);
