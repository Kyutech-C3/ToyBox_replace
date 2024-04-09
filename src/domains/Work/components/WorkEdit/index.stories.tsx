import { WorkEditPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkEditPresentation> = {
  component: WorkEditPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkEditPresentation>;

export const Default: Story = {
  args: {
    assets: [
      {
        id: '1',
        url: 'https://placehold.jp/150x150.png',
        assetType: 'image',
        extension: 'png',
      },
    ],
    errors: {
      title: {
        type: 'required',
        message: '',
      },
      description: {
        type: 'required',
        message: '',
      },
    },
    links: ['https://example.com'],
    registers: {
      title: {
        onChange: function (): Promise<boolean | void> {
          return new Promise(() => {});
        },
        onBlur: function (): Promise<boolean | void> {
          return new Promise(() => {});
        },
        ref: function (): void {},
        name: 'title',
      },
      description: {
        onChange: function (): Promise<boolean | void> {
          return new Promise(() => {});
        },
        onBlur: function (): Promise<boolean | void> {
          return new Promise(() => {});
        },
        ref: function (): void {},
        name: 'description',
      },
    },
    handleChangeCursor: () => {},
    handleChangePostDiscord: () => {},
    handleChangeVisibility: () => {},
    handleEditDescription: () => {},
    handlePublish: async () =>
      await new Promise(() => ({
        id: '1',
      })),
    handleSetLinks: () => {},
    handleSetTag: () => {},
    handleUploadAssets: async () => {},
    previewWork: {
      title: '作品タイトル',
      thumbnailUrl: 'https://placehold.jp/150x150.png',
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
      isPublic: true,
    },
    defaultWork: {
      title: '作品タイトル',
      description: '作品説明',
      thumbnail: {
        id: '1',
        url: 'https://placehold.jp/150x150.png',
      },
      tags: [
        {
          id: '1',
          name: 'タグ名',
          color: 'red',
          textColor: 'white',
        },
      ],
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
    },
  },
};
