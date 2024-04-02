import { useReducer, useRef, useState } from 'react';
import type { RefObject } from 'react';

import { getCroppedImgBase64 } from '../logic/getCroppedImgBase64';

import type { Crop } from '@/libs/ImageCrop';

import { useErrorBoundary } from '@/libs/ErrorBoundary';

export type IUseImageCrop = {
  crop: Crop;
  imgRef: RefObject<HTMLImageElement> | null;
  canvasRef: RefObject<HTMLCanvasElement> | null;
  isLoading: boolean;
  handleCropChange: (crop: Crop) => void;
  handleImageLoad: () => void;
  handleError: () => void;
  onCropComplete: (crop: Crop) => void;
};

export const useImageCrop = (
  handleImageCrop: (imageUrl: string) => void
): IUseImageCrop => {
  const [crop, setCrop] = useState<Crop>({
    x: 0,
    y: 0,
    unit: '%',
    width: 0,
    height: 0,
  });
  const { showBoundary } = useErrorBoundary();
  const [isLoading, loadComplete] = useReducer(() => false, true);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageLoad = (): void => {
    loadComplete();
  };

  const handleError = (): void => {
    showBoundary(new Error('Failed to load image'));
  };

  const handleCropChange = (crop: Crop): void => {
    setCrop(crop);
  };

  const onCropComplete = (crop: Crop): void => {
    const imgElement = imgRef.current;
    const canvasElement = canvasRef.current;
    if (!imgElement || !canvasElement) {
      return;
    }

    handleImageCrop(getCroppedImgBase64(canvasElement, imgElement, crop));
  };

  return {
    crop,
    onCropComplete,
    handleCropChange,
    isLoading,
    handleImageLoad,
    imgRef,
    canvasRef,
    handleError,
  };
};
