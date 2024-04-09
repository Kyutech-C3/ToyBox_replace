import type { Crop } from '@/libs/ImageCrop';

export const getCroppedImgBase64 = (
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  crop: Crop
): string => {
  if (!canvas) {
    console.error('Canvas ref is not assigned');
    return '';
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context');
    return '';
  }

  canvas.width = crop.width;
  canvas.height = crop.height;

  const scale = image.naturalHeight / image.height;
  ctx.drawImage(
    image,
    crop.x * scale,
    crop.y * scale,
    crop.width * scale,
    crop.height * scale,
    0,
    0,
    crop.width,
    crop.height
  );

  const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
  if (!dataUrl) {
    console.error('Failed to get data URL');
  }
  return dataUrl;
};
