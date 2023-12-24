import type { FC, KeyboardEvent } from 'react';

import { UrlCounter } from './UrlCounter';
import { UrlListElement } from './UrlListElement';

import { Input } from '@/components/ui/Input';

type Props = {
  links: string[];
  onInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  deleteLink: (link: string) => void;
  maxAmount: number;
  invalidUrlWarning: boolean;
  duplicateUrlWarning: boolean;
};

export const URLInputPresentation: FC<Props> = ({
  links,
  onInputKeyDown,
  deleteLink,
  maxAmount,
  invalidUrlWarning,
  duplicateUrlWarning,
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
      <Input
        type="url"
        onKeyDown={onInputKeyDown}
        disabled={links.length >= maxAmount}
        placeholder={links.length >= maxAmount ? 'これ以上追加できません' : ''}
        className="border-primary w-full h-10"
      />
      <UrlCounter count={links.length} max={maxAmount} />
    </div>
    {duplicateUrlWarning && (
      <p className="text-destructive">このURLは既に追加されています！</p>
    )}
    {invalidUrlWarning && (
      <p className="text-destructive">正しいURLを入力してください！</p>
    )}
  </div>
);
