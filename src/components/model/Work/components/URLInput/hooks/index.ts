import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { isValidUrl } from '../logics';

type UseURLInputProps = {
  links: string[];
  setLinks: (links: string[]) => void;
};

type IUseURLInput = {
  deleteLink: (link: string) => void;
  input: string;
  warning: Warning;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

export const warningMessages = {
  ok: '',
  invalidUrl: '正しいURLを入力してください',
  duplicateUrl: 'このURLは既に登録されています',
  empty: 'URLを入力してください',
} as const;

type WarningStatus = 'ok' | 'invalid' | 'duplicate' | 'empty';
type WarningMessage = (typeof warningMessages)[keyof typeof warningMessages];
export type Warning = {
  status: WarningStatus;
  message: WarningMessage;
};

export const useURLInput = ({
  links,
  setLinks,
}: UseURLInputProps): IUseURLInput => {
  const [input, setInput] = useState<string>('');
  const [warning, setWarning] = useState<Warning>({
    status: 'ok',
    message: warningMessages.ok,
  });

  const addLink = (link: string): void => {
    setLinks([...links, link]);
  };

  const deleteLink = (link: string): void => {
    setLinks(links.filter((item) => item !== link));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInput(value);

    // 入力中は警告を消す
    if (warning.status !== 'ok') {
      setWarning({
        status: 'ok',
        message: warningMessages.ok,
      });
    }
  };

  const handleSubmit = (): void => {
    if (input === '') {
      setWarning({
        status: 'empty',
        message: warningMessages.empty,
      });
      return;
    }

    if (!isValidUrl(input)) {
      setWarning({
        status: 'invalid',
        message: warningMessages.invalidUrl,
      });
      return;
    } else if (links.includes(input)) {
      setWarning({
        status: 'duplicate',
        message: warningMessages.duplicateUrl,
      });
      return;
    }

    addLink(input);
    setInput('');
  };

  return {
    deleteLink,
    input,
    warning,
    handleChange,
    handleSubmit,
  };
};
