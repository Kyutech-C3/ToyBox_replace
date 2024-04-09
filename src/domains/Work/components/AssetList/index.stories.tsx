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
        extension: 'png',
        url: 'https://placehold.jp/150x150.png',
      },
      {
        assetType: 'video',
        id: '2',
        extension: 'mp4',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        assetType: 'music',
        id: '3',
        extension: 'mp3',
        url: 'https://github.com/SergLam/Audio-Sample-files/raw/master/sample.mp3',
      },
      {
        assetType: 'model',
        id: '4',
        extension: 'glb',
        url: '/mocks/mock.glb',
      },
      {
        assetType: 'zip',
        id: '5',
        extension: 'zip',
        url: 'https://placehold.jp/150x150.png',
      },
    ],
  },
};

export const Loading: Story = {
  render: () => <AssetListLoading />,
};
