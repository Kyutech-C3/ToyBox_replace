import type { FC, ReactNode } from 'react';

import Link from 'next/link';

import { Vertical } from '../Vertical';

import { Typography } from '@/components/ui/Typography';
import { C3_BLOG, TOYBOX_DESCRIPTION } from '@/constants/baseUrl/link';

type Props = {
  children: ReactNode;
  className?: string;
};
export const WithHeader: FC<Props> = ({ children, className }) => (
  <div className={className}>
    <Header />
    {children}
  </div>
);

const Header = (): ReactNode => (
  <Vertical className="items-center p-4" as="header">
    <Typography variant="h1" className="text-nowrap flex flex-row flex-grow">
      <p className="text-orange-pop">T</p>
      oy
      <p className="text-orange-pop">B</p>
      ox
    </Typography>
    <Link href={C3_BLOG} className="underline">
      C3ブログ
    </Link>
    <Link href={TOYBOX_DESCRIPTION} className="underline">
      ToyBoxとは
    </Link>
    <Link href="/login" className=" border-orange-pop rounded-sm border-2 px-2">
      C3部員はこちら
    </Link>
  </Vertical>
);
