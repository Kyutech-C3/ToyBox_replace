import type { FC } from 'react';

import Link from 'next/link';

import type { User } from '../../types';

import { Avatar, AvatarImage } from '@/components/ui/Avatar';
import { cn } from '@/libs/utils';

type Props = {
  user: User;
  className?: string;
};
export const UserCard: FC<Props> = ({
  user: { id, avatarUrl, displayName },
  className,
}) => (
  <div className={cn('flex flex-row gap-2 relative', className)}>
    <Link className="w-full h-full absolute" href={`/users/${id}`} />
    <Avatar className="w-6 h-6 border-[0.5px] border-black">
      <AvatarImage src={avatarUrl} />
    </Avatar>
    <p className="font-bold">{displayName}</p>
  </div>
);
