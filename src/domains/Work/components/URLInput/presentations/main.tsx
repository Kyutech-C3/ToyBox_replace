import type { ChangeEvent, FC, FormEvent } from 'react';

import { UrlAddButton } from './UrlAddButton';
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
    <div className="my-1 mr-14">
      {links.map((link) => (
        <UrlListElement
          key={link}
          link={link}
          deleteLink={deleteLink}
          heightClassName="h-10"
        />
      ))}
    </div>
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="w-full"
    >
      <div className="flex flex-row">
        <div className="relative w-full">
          <Input
            type="url"
            value={input}
            onChange={handleChange}
            disabled={links.length >= maxAmount}
            placeholder={
              links.length >= maxAmount ? 'これ以上追加できません' : ''
            }
            className="border-orange-pop w-full h-10 pr-12"
          />
          <div className="absolute right-0 top-0 h-10">
            <UrlCounter count={links.length} max={maxAmount} />
          </div>
        </div>
        <UrlAddButton
          ratio={(links.length / maxAmount) * 100}
          disabled={links.length >= maxAmount}
        />
      </div>
      <div className="h-6">
        {warning.status !== 'ok' && (
          <p className="text-destructive">{warning.message}</p>
        )}
      </div>
    </form>
  </div>
);
