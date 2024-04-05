'use client';

import type { FC, ReactNode } from 'react';

import Image from 'next/image';

import { useDragImage } from './hooks';

import { cn } from '@/libs/utils';

type Props = {
  children: ReactNode;
  onDrop: (files: FileList) => void;
  className?: string;
};
export const DropImage: FC<Props> = ({ children, onDrop, className }) => {
  const { isDrag, handleDragEnter, handleDragLeave, handleDrop } =
    useDragImage(onDrop);

  return (
    <div
      className={cn(
        'relative before:absolute before:block before:contents-[""] before:w-full before:h-full before:z-40 before:pointer-events-none overflow-hidden',
        { 'before:bg-black/50': isDrag },
        className
      )}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <Image
        src="/wave-hands.webp"
        width={64}
        height={64}
        alt=""
        className={cn(
          'absolute right-0 -bottom-16 duration-300 transition-transform z-50',
          { '-translate-y-12': isDrag }
        )}
      />
      {children}
    </div>
  );
};
