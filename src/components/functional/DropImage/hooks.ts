import { useState } from 'react';
import type { DragEvent } from 'react';

type IUseDragImage = {
  isDrag: boolean;
  handleDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
};

export const useDragImage = (
  onDrop: (files: FileList) => void
): IUseDragImage => {
  const [isDrag, setIsDrag] = useState(false);
  const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
    if (e.dataTransfer.items.length > 0) {
      setIsDrag(true);
    }
  };

  const handleDragLeave = (): void => {
    setIsDrag(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    console.log('in');
    e.preventDefault();
    console.log('in2');
    setIsDrag(false);
    if (!e.dataTransfer.files.length) {
      return;
    }
    onDrop(e.dataTransfer.files);
    e.dataTransfer.clearData();
  };
  return {
    isDrag,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
  };
};
