'use client';

import type { FC } from 'react';

import { useURLInput } from '../hooks';

import { URLInputPresentation } from './main';

type Props = {
  links: string[];
  setLinks: (links: string[]) => void;
  maxAmount: number;
};

export const URLInputContainer: FC<Props> = ({
  links,
  setLinks,
  maxAmount,
}: Props) => {
  const { deleteLink, input, warning, handleChange, handleSubmit } =
    useURLInput({
      links,
      setLinks,
    });

  return (
    <URLInputPresentation
      deleteLink={deleteLink}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      input={input}
      links={links}
      maxAmount={maxAmount}
      warning={warning}
    />
  );
};
