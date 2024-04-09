import { createRef } from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ImageCrop } from '.';

import type { IUseImageCrop } from './hooks';

const mockHandleImageCrop = jest.fn();
const mockHandleCropChange = jest.fn();
const mockOnCropComplete = jest.fn();
const mockHandleImageLoad = jest.fn();
const mockHandleError = jest.fn();
const mockUseImageCrop = {
  crop: { unit: '%', width: 0, height: 0, x: 0, y: 0 },
  handleCropChange: mockHandleCropChange,
  onCropComplete: mockOnCropComplete,
  isLoading: true,
  handleImageLoad: mockHandleImageLoad,
  imgRef: createRef<HTMLImageElement>(),
  canvasRef: createRef<HTMLCanvasElement>(),
  handleError: mockHandleError,
} as const;

jest.mock('./hooks', () => ({
  useImageCrop: (): IUseImageCrop => mockUseImageCrop,
}));

describe('model/ImageCrop', () => {
  it('render element correctly', () => {
    render(
      <ImageCrop imageUrl="test-url" handleImageCrop={mockHandleImageCrop} />
    );
    expect(screen.getByAltText('サムネイル')).toBeInTheDocument();
  });

  it('skeleton render when image loading', () => {
    jest.mock('./hooks', () => ({
      useImageCrop: (): IUseImageCrop => ({
        ...mockUseImageCrop,
        isLoading: true,
      }),
    }));

    const { queryByTestId } = render(
      <ImageCrop imageUrl="test-url" handleImageCrop={mockHandleImageCrop} />
    );
    expect(queryByTestId('loading')).toBeInTheDocument();
  });

  it('call handleImageLoad when image loaded', () => {
    render(
      <ImageCrop imageUrl="test-url" handleImageCrop={mockHandleImageCrop} />
    );
    fireEvent.load(screen.getByAltText('サムネイル'));
    expect(mockHandleImageLoad).toHaveBeenCalled();
  });

  it('call handleError when Image load cause Error', () => {
    render(
      <ImageCrop imageUrl="test-url" handleImageCrop={mockHandleImageCrop} />
    );
    fireEvent.error(screen.getByAltText('サムネイル'));
    expect(mockHandleError).toHaveBeenCalled();
  });
});
