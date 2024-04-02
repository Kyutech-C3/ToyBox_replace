import { useCallback } from 'react';

import { useAtom } from 'jotai';

import type { GetWorksQuery } from '../types';
import type { Visibility } from '@/api/@types';

import { worksQueryAtom } from '@/state/worksQuery';

type IUseWorkQuery = {
  query: GetWorksQuery;
  handleChangeKeyword: (keyword: string) => void;
  handleChangeVisibility: (visibility: Visibility) => void;
  handleChangeTagId: (tagId: string) => void;
};
export const useWorkQuery = (): IUseWorkQuery => {
  const [query, setQuery] = useAtom(worksQueryAtom);
  const handleChangeKeyword = useCallback(
    (keyword: string): void => {
      setQuery((prev: GetWorksQuery) => ({ ...prev, searchWord: keyword }));
    },
    [setQuery]
  );

  const handleChangeVisibility = useCallback(
    (visibility: Visibility): void => {
      setQuery((prev: GetWorksQuery) => ({ ...prev, visibility }));
    },
    [setQuery]
  );

  const handleChangeTagId = useCallback(
    (tagId: string): void => {
      if (query.tagIds?.includes(tagId)) {
        setQuery((prev: GetWorksQuery) => ({
          ...prev,
          tagIds: prev.tagIds?.filter((id) => id !== tagId) ?? [],
        }));
        return;
      }
      setQuery((prev: GetWorksQuery) => ({
        ...prev,
        tagIds: [...(prev.tagIds ?? []), tagId],
      }));
    },
    [query.tagIds, setQuery]
  );
  return {
    query,
    handleChangeKeyword,
    handleChangeVisibility,
    handleChangeTagId,
  };
};
