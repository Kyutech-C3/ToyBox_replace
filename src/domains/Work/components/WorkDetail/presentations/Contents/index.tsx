import type { FC } from 'react';

import { MarkdownViewer } from '@/components/ui/MarkdownViewer';
import { cn } from '@/libs/utils';

type Props = {
  contents: string;
};
export const Contents: FC<Props> = ({ contents }) => (
  <div className={cn('relative py-4 w-full overflow-hidden')}>
    <MarkdownViewer>{contents}</MarkdownViewer>
  </div>
);
