import { useState } from 'react';
import type { KeyboardEvent } from 'react';

type IUseURLInput = {
  links: string[];
  onInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  deleteLink: (link: string) => void;
  invalidUrlWarning: boolean;
  duplicateUrlWarning: boolean;
};

const isValidUrl = (url: string): boolean =>
  url.match(/^https?:\/\/[\w/:%#&?()~.=+-]+$/) !== null;

export const useURLInput = (): IUseURLInput => {
  const [invalidUrlWarning, setInvalidUrlWarning] = useState<boolean>(false);
  const [duplicateUrlWarning, setDuplicateUrlWarning] =
    useState<boolean>(false);

  const [links, setLinks] = useState<string[]>([]);

  const addLink = (link: string): void => {
    setLinks([...links, link]);
  };

  const deleteLink = (link: string): void => {
    setLinks(links.filter((item) => item !== link));
  };

  const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.code !== 'Enter') {
      if (invalidUrlWarning) setInvalidUrlWarning(false);
      if (duplicateUrlWarning) setDuplicateUrlWarning(false);
      return;
    }

    const link = e.currentTarget.value;

    if (links.includes(link)) {
      setDuplicateUrlWarning(true);
      return;
    }
    if (!isValidUrl(link)) {
      setInvalidUrlWarning(true);
      return;
    }

    addLink(link);
    e.currentTarget.value = '';
  };

  return {
    links,
    onInputKeyDown,
    deleteLink,
    invalidUrlWarning,
    duplicateUrlWarning,
  };
};
