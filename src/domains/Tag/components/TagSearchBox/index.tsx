import type { FC } from 'react';

import { TagSearchInput } from '../TagSearchInput';
import { TagSearchResult } from '../TagSearchResult';

import type { Tag } from '../../types';

import { Horizontal } from '@/components/Layout/Horizontal';

type Props = {
  handleTagClick: (tag: Tag) => void;
};
export const TagSearchBox: FC<Props> = ({ handleTagClick }) => (
  <Horizontal className="border-orange-pop border-2 rounded-md overflow-scroll">
    <TagSearchInput />
    <div className="px-4 pb-4">
      <TagSearchResult handleClickTag={handleTagClick} />
    </div>
  </Horizontal>
);
