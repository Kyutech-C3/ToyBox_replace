import type { FC, ReactNode } from 'react';

import { Info } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

type Props = {
  children: ReactNode;
};

export const InfoPopOver: FC<Props> = ({ children }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Info size={16} color="#757575" />
      </TooltipTrigger>
      <TooltipContent className="rounded-md relative text-xl border-2 bg-white border-orange-pop">
        <p className="whitespace-pre-wrap text-[10px] font-bold">{children}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
