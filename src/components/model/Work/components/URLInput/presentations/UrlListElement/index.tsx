import type { FC } from 'react';

import { Dot, X } from 'lucide-react';

import { cn } from '@/libs/utils';

type Props = {
  link: string;
  heightClassName: string;
  deleteLink: (link: string) => void;
};

export const UrlListElement: FC<Props> = ({
  link,
  deleteLink,
  heightClassName: heightClassName,
}: Props) => (
  <div className={cn('w-full flex flex-row items-center', heightClassName)}>
    <Dot size={18} className="text-gray-700" />
    <p className="w-full text-ellipsis whitespace-nowrap overflow-hidden">
      {link}
    </p>
    <X
      size={18}
      className="text-gray-600 ml-auto cursor-pointer"
      onClick={() => {
        deleteLink(link);
      }}
    />
  </div>
);
