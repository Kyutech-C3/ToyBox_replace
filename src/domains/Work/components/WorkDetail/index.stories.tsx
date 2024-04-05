import { WorkDetailPresentation } from './presentations';
import { WorkDetailEmptyPresentation } from './presentations/empty';
import { WorkDetailErrorPresentation } from './presentations/error';
import { WorkDetailLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkDetailPresentation> = {
  component: WorkDetailPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkDetailPresentation>;

export const Default: Story = {
  args: {
    work: {
      id: '1',
      title: '作品タイトル',
      description: '作品説明',
      tags: [
        {
          id: '1',
          name: 'タグ名',
          color: 'red',
          textColor: 'white',
        },
      ],
      creator: {
        id: '1',
        displayName: 'ユーザー名',
        avatarUrl: 'https://placehold.jp/150x150.png',
      },
      createdAt: '2022-01-01',
      thumbnailUrl: 'https://placehold.jp/150x150.png',
      assets: [
        {
          id: '1',
          url: 'https://placehold.jp/150x150.png',
          assetType: 'image',
          extension: 'png',
        },
      ],
      urls: [
        {
          url: 'https://example.com',
          urlType: 'others',
        },
      ],
      isPublic: true,
      updatedAt: '2022-01-01',
    },
  },
};

export const Empty: Story = {
  render: () => <WorkDetailEmptyPresentation />,
};

export const Error: Story = {
  render: () => <WorkDetailErrorPresentation />,
};

export const Loading: Story = {
  render: () => <WorkDetailLoadingPresentation />,
};
