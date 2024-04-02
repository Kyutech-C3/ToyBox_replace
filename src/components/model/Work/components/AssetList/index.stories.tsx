import { AssetListLoading } from './loading';
import { AssetList } from './main';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AssetList> = {
  component: AssetList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AssetList>;

export const Default: Story = {
  decorators: [
    (Story): JSX.Element => (
      <div className="w-[800px] h-[400px]">
        <Story />
      </div>
    ),
  ],
  args: {
    assets: [
      {
        assetType: 'image',
        id: '1',
        user: {
          id: '1',
          displayName: 'user1',
          avatarUrl: 'https://placehold.jp/150x150.png',
        },
        extension: 'png',
        url: 'https://placehold.jp/150x150.png',
        createdAt: '2021-01-01T00:00:00Z',
        updatedAt: '2021-01-01T00:00:00Z',
      },
      {
        assetType: 'video',
        id: '2',
        user: {
          id: '2',
          displayName: 'user2',
          avatarUrl: 'https://placehold.jp/150x150.png',
        },
        extension: 'mp4',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        createdAt: '2021-01-01T00:00:00Z',
        updatedAt: '2021-01-01T00:00:00Z',
      },
      {
        assetType: 'music',
        id: '3',
        user: {
          id: '3',
          displayName: 'user3',
          avatarUrl: 'https://placehold.jp/150x150.png',
        },
        extension: 'mp3',
        url: 'https://github.com/SergLam/Audio-Sample-files/raw/master/sample.mp3',
        createdAt: '2021-01-01T00:00:00Z',
        updatedAt: '2021-01-01T00:00:00Z',
      },
      {
        assetType: 'model',
        id: '4',
        user: {
          id: '4',
          displayName: 'user4',
          avatarUrl: 'https://placehold.jp/150x150.png',
        },
        extension: 'glb',
        url: '/mocks/mock.glb',
        createdAt: '2021-01-01T00:00:00Z',
        updatedAt: '2021-01-01T00:00:00Z',
      },
      {
        assetType: 'zip',
        id: '5',
        user: {
          id: '5',
          displayName: 'user5',
          avatarUrl: 'https://placehold.jp/150x150.png',
        },
        extension: 'zip',
        url: 'https://placehold.jp/150x150.png',
        createdAt: '2021-01-01T00:00:00Z',
        updatedAt: '2021-01-01T00:00:00Z',
      },
    ],
  },
};

export const Loading: Story = {
  render: () => <AssetListLoading />,
};
