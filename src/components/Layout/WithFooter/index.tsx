import type { FC, ReactNode } from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Horizontal } from '../Horizontal';
import { Vertical } from '../Vertical';

import { Typography } from '@/components/ui/Typography';
import {
  C3_OFFICIAL_SITE,
  C3_OFFICIAL_TWITTER,
  C3_OFFICIAL_YOUTUBE,
} from '@/constants/baseUrl/link';

type Props = {
  children: ReactNode;
  className?: string;
};
export const WithFooter: FC<Props> = ({ children, className }) => (
  <Horizontal className={clsx('gap-8', className)}>
    {children}
    <Footer />
  </Horizontal>
);

const Footer = (): ReactNode => (
  <Horizontal className="items-center gap-8">
    <Vertical className="gap-14">
      <Link
        href={C3_OFFICIAL_SITE}
        className="rounded-full bg-pale-red/50 flex items-center justify-center w-14 h-14"
      >
        <Image src="/c3.webp" alt="C3のアイコン" width={40} height={40} />
      </Link>
      <Link
        href={C3_OFFICIAL_YOUTUBE}
        className="rounded-full bg-pale-red/50 flex items-center justify-center w-14 h-14"
      >
        <Image
          src="/youtube.webp"
          alt="youtubeのアイコン"
          width={40}
          height={40}
        />
      </Link>
      <Link
        href={C3_OFFICIAL_TWITTER}
        className="rounded-full bg-pale-red/50 flex items-center justify-center w-14 h-14"
      >
        <Image
          src="/twitter.webp"
          alt="twitterのアイコン"
          width={28}
          height={28}
        />
      </Link>
    </Vertical>
    <Typography>© 2022 - Composite Computer Club</Typography>
  </Horizontal>
);
