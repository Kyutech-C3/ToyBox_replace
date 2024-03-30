import type { FC } from 'react';

import { Globe, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarImage } from '@/components/ui/Avatar';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { DateLabel } from '@/components/ui/DateLabel';

{
  /* TODO:user domainが作成されたらそこからimportする */
}
type User = {
  id: string;
  avatarUrl: string;
  displayName: string;
};

{
  /* TODO:tag domainが作成されたらそこからimportする */
}
type Tag = {
  id: string;
  name: string;
  color: string;
  textColor: string;
};

type Props = {
  isPublic: boolean;
  title: string;
  tags: Tag[];
  creator: User;
  createdAt: string;
  thumbnailUrl: string;
};

export const WorkCard: FC<Props> = ({
  isPublic,
  title,
  tags,
  createdAt,
  creator,
  thumbnailUrl,
}) => (
  <Card className="p-2 w-60 h-80 shadow-lg">
    <div className="relative aspect-thumbnail rounded-sm overflow-hidden">
      <Visibility isPublic={isPublic} />
      <Image
        src={
          thumbnailUrl == 'string'
            ? 'https://placehold.jp/150x150.png'
            : thumbnailUrl
        }
        alt={`${title}のサムネイル`}
        fill
        className="object-cover"
      />
    </div>
    <CardContent className="flex p-0 gap-2 flex-col pt-4 px-2">
      <CardTitle className="text-ellipsis overflow-hidden h-7 text-nowrap ">
        {title}
      </CardTitle>
      <div className="flex flex-row gap-2 overflow-scroll pb-2">
        {/* TODO:tag domainが作成されたらそこからimportする */}
        {tags?.map((tag) => (
          <span
            key={tag.id}
            className="rounded-sm px-2 text-sm"
            style={{ backgroundColor: tag.color, color: tag.textColor }}
          >
            {tag.name}
          </span>
        ))}
      </div>
      <div>
        {/* TODO:user domainが作成されたらそこからimportする */}
        <UserCard {...creator} />
        <span className="flex-grow text-end float-end">
          <DateLabel date={createdAt} format="yyyy/MM/dd" />
        </span>
      </div>
    </CardContent>
  </Card>
);

const UserCard: FC<User> = ({ id, avatarUrl, displayName }) => (
  <div className="flex flex-row gap-2 relative">
    <Link className="w-full h-full absolute" href={`/users/${id}`} />
    <Avatar className="w-6 h-6 border-[0.5px] border-black">
      <AvatarImage src={avatarUrl} />
    </Avatar>
    <p className="font-bold">{displayName}</p>
  </div>
);

const Visibility: FC<{ isPublic: boolean }> = ({ isPublic }) => (
  <span className="absolute z-50 left-1 top-1 text-green-light drop-shadow">
    {isPublic ? <Globe className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
  </span>
);
