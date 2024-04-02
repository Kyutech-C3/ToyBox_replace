'use client';

import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

import { ChevronDown } from 'lucide-react';

import { MarkdownViewer } from '@/components/ui/MarkdownViewer';
import { cn } from '@/libs/utils';

type Props = {
  contents: string;
};
export const Contents: FC<Props> = ({ contents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.clientHeight;
      if (height > 100) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
  }, []);
  return (
    <div
      className={cn(
        'relative py-4 w-full overflow-hidden',
        isOpen ? 'h-auto' : 'max-h-96'
      )}
    >
      <div ref={containerRef}>
        <MarkdownViewer>{contents}</MarkdownViewer>
      </div>
      {!isOpen && (
        <>
          <div className="absolute bottom-0 left-0 w-full h-2 backdrop-blur-[0.5px] bg-white/5" />
          <div className="absolute bottom-0 left-0 w-full h-4 backdrop-blur-[0.5px] bg-white/5" />
          <div className="absolute bottom-0 left-0 w-full h-6 backdrop-blur-[0.5px] bg-white/5" />
          <div className="absolute bottom-0 left-0 w-full h-8 backdrop-blur-[0.5px] bg-white/5" />
          <div className="absolute bottom-0 left-0 w-full h-10 backdrop-blur-[0.5px] bg-white/5" />
          <div className="absolute bottom-0 left-0 w-full h-12 backdrop-blur-[0.5px] bg-white/5" />
          <button
            onClick={() => setIsOpen(true)}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-orange-pop rounded-full pl-8 pr-6 py-2 text-white text-xs flex flex-row gap-1"
          >
            続きを表示
            <ChevronDown size={16} />
          </button>
        </>
      )}
    </div>
  );
};
