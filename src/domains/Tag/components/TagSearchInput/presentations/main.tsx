import type { FC } from 'react';

import { Search } from 'lucide-react';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Input } from '@/components/ui/Input';

type Props = {
  searchWord: string;
  setSearchWord: (searchWord: string) => void;
};

export const TagSearchInputPresentation: FC<Props> = ({
  searchWord,
  setSearchWord,
}: Props) => (
  <Horizontal className="relative">
    <Search className="absolute left-1 top-1 text-orange-pop" />
    <Input
      className="outline-orange-pop outline-2 outline border-none rounded-sm focus-visible:outline-pale-red h-8 px-2 w-full pl-8"
      value={searchWord}
      placeholder="タグを検索"
      onChange={(e) => {
        setSearchWord(e.target.value);
      }}
    />
  </Horizontal>
);
