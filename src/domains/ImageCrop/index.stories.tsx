import { ImageCropPresentation } from './presentations';
import { ImageCropErrorPresentation } from './presentations/error';
import { ImageCropLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

import { ErrorBoundary } from '@/libs/ErrorBoundary';

const meta: Meta<typeof ImageCropPresentation> = {
  component: ImageCropPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => (
      <div className="w-96 h-96 bg-slate-300">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ImageCropPresentation>;

export const Default: Story = {
  args: {
    imageUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
    handleImageCrop: (imgUrl: string) => {
      console.log(imgUrl);
    },
  },
  decorators: [
    (Story): JSX.Element => (
      <ErrorBoundary fallback={<ImageCropErrorPresentation />}>
        <Story />
      </ErrorBoundary>
    ),
  ],
};

export const Error: Story = {
  render: () => <ImageCropErrorPresentation />,
};

export const Loading: Story = {
  render: () => <ImageCropLoadingPresentation />,
};
