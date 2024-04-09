import type { FC } from 'react';

import { Skeleton } from '@/components/ui/Skeleton';

export const ImageCropLoadingPresentation: FC = () => (
  <Skeleton data-testid="loading" className="w-full h-full" />
);
