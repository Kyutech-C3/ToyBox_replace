import type { FC } from 'react';

import { ImageCropPresentation } from './presentations';
import { ImageCropErrorPresentation } from './presentations/error';

import { ErrorBoundary } from '@/libs/ErrorBoundary';

export type Props = {
  imageUrl: string;
  handleImageCrop: (croppedImageUrl: string) => void;
};

export const ImageCrop: FC<Props> = (props) => (
  <ErrorBoundary fallback={<ImageCropErrorPresentation />}>
    <ImageCropPresentation {...props} />
  </ErrorBoundary>
);
