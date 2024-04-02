/* eslint-disable @next/next/no-img-element */
// Next Imageだとcrop範囲が描画されないため、img要素を使用
import type { FC } from 'react';

import { useImageCrop } from '../hooks';

import { ImageCropLoadingPresentation } from './loading';

import type { Props } from '..';

import { Skeleton } from '@/components/ui/Skeleton';
import { ReactCrop } from '@/libs/ImageCrop';

import 'react-image-crop/dist/ReactCrop.css';

export const ImageCropPresentation: FC<Props> = ({
  imageUrl,
  handleImageCrop,
}) => {
  const {
    crop,
    handleCropChange,
    onCropComplete,
    isLoading,
    handleImageLoad,
    imgRef,
    canvasRef,
    handleError,
  } = useImageCrop(handleImageCrop);
  return (
    <>
      {isLoading && <ImageCropLoadingPresentation />}
      <ReactCrop
        crop={crop}
        onChange={handleCropChange}
        onComplete={onCropComplete}
        aspect={16 / 9}
      >
        <img
          src={imageUrl}
          alt="サムネイル"
          onLoad={(): void => handleImageLoad()}
          onError={(): void => handleError()}
          ref={imgRef}
          crossOrigin="anonymous"
        />
        {isLoading && <Skeleton className="w-full h-full" />}
      </ReactCrop>
      <canvas ref={canvasRef} className="hidden" />
    </>
  );
};
