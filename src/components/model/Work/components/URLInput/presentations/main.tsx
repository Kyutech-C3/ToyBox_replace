import type { ChangeEvent, FC, FormEvent } from 'react';

import { UrlCounter } from './UrlCounter';
import { UrlListElement } from './UrlListElement';

import type { Warning } from '../hooks';

import { Input } from '@/components/ui/Input';

type Props = {
  links: string[];
  deleteLink: (link: string) => void;
  input: string;
  warning: Warning;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  maxAmount: number;
};

export const URLInputPresentation: FC<Props> = ({
  links,
  deleteLink,
  input,
  warning,
  handleChange,
  handleSubmit,
  maxAmount,
}: Props) => (
  <div>
    <p className="text-lg font-bold">URL</p>
    <div className="mt-1 mr-14">
      {links.map((link) => (
        <UrlListElement
          key={link}
          link={link}
          deleteLink={deleteLink}
          heightClassName="h-10"
        />
      ))}
    </div>
    <div className="flex flex-row mt-1 w-full">
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full"
      >
        <Input
          type="url"
          value={input}
          onChange={handleChange}
          disabled={links.length >= maxAmount}
          placeholder={
            links.length >= maxAmount ? 'これ以上追加できません' : ''
          }
          className="border-primary w-full h-10"
        />
      </form>
      <UrlCounter count={links.length} max={maxAmount} />
    </div>
    {warning.status !== 'ok' && (
      <p className="text-destructive">{warning.message}</p>
    )}
  </div>
);
