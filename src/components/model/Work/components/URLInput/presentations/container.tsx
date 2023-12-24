import { useEffect } from 'react';
import type { FC } from 'react';

import { useURLInput } from '../hooks';

import { URLInputPresentation } from './main';

type Props = {
  setLinks: (links: string[]) => void;
  maxAmount: number;
};

export const URLInputContainer: FC<Props> = ({
  setLinks,
  maxAmount,
}: Props) => {
  const {
    deleteLink,
    onInputKeyDown,
    links,
    invalidUrlWarning,
    duplicateUrlWarning,
  } = useURLInput();

  useEffect(() => {
    if (setLinks !== undefined) {
      setLinks(links);
    }
  }, [links, setLinks]);

  return (
    <URLInputPresentation
      links={links}
      onInputKeyDown={onInputKeyDown}
      deleteLink={deleteLink}
      maxAmount={maxAmount}
      invalidUrlWarning={invalidUrlWarning}
      duplicateUrlWarning={duplicateUrlWarning}
    />
  );
};
