import type { FC } from 'react';

import { Info } from 'lucide-react';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { Typography } from '@/components/ui/Typography';

type Props = {
  supportedExts: readonly {
    category: string;
    exts: readonly string[];
  }[];
};

export const SupportExtPopOver: FC<Props> = ({ supportedExts }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Info size={16} color="#757575" />
      </TooltipTrigger>

      <TooltipContent className="rounded-md relative border-2 bg-white border-orange-pop text-[10px]">
        <Horizontal className="gap-1">
          <Typography variant="strong">対応形式:</Typography>
          {supportedExts.map(({ category, exts }) => (
            <Vertical key={category} className="pl-4 gap-1">
              <Typography variant="strong">{category}</Typography>
              <Typography variant="strong">
                <Vertical className="gap-1">
                  [
                  <Vertical className="gap-1">
                    {exts.map((ext) => (
                      <span key={ext}>.{ext}</span>
                    ))}
                  </Vertical>
                  ]
                </Vertical>
              </Typography>
            </Vertical>
          ))}
        </Horizontal>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
