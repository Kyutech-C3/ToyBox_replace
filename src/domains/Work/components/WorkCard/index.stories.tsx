import { WorkCard, WorkCardLoading } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

import { dateFormat } from '@/libs/dateFormat';

const meta: Meta<typeof WorkCard> = {
  component: WorkCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
  args: {
    work: {
      isPublic: true,
      title: 'title',
      id: '1',
      tags: [
        {
          id: '1',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
        {
          id: '2',
          name: 'name',
          textColor: '#ffffff',
          color: '#000000',
        },
      ],
      createdAt: dateFormat(new Date().toString(), 'yyyy/MM/dd'),
      creator: {
        id: '1',
        displayName: 'name',
        avatarUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
      },
      thumbnailUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
    },
  },
};

export const Private: Story = {
  args: {
    work: {
      isPublic: true,
      title: 'title',
      id: '1',
      tags: [
        {
          id: '1',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
        {
          id: '2',
          name: 'name',
          textColor: '#ffffff',
          color: '#000000',
        },
      ],
      createdAt: dateFormat(new Date().toString(), 'yyyy/MM/dd'),
      creator: {
        id: '1',
        displayName: 'name',
        avatarUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
      },
      thumbnailUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
    },
  },
};

export const LongTitle: Story = {
  args: {
    work: {
      id: '1',

      isPublic: true,
      title:
        'とても長いタイトルですううううううううううううううううううううううううううううううううう',
      tags: [
        {
          id: '1',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
        {
          id: '2',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
      ],
      createdAt: dateFormat(new Date().toString(), 'yyyy/MM/dd'),
      creator: {
        id: '1',
        displayName: 'name',
        avatarUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
      },
      thumbnailUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
    },
  },
};

export const NumerousTags: Story = {
  args: {
    work: {
      id: '1',
      isPublic: true,
      title: 'title',
      tags: [
        {
          id: '1',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
        {
          id: '2',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
        {
          id: '3',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
        {
          id: '4',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
        {
          id: '5',
          name: 'name',
          color: '#000000',
          textColor: '#ffffff',
        },
      ],
      createdAt: dateFormat(new Date().toString(), 'yyyy/MM/dd'),
      creator: {
        id: '1',
        displayName: 'name',
        avatarUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
      },
      thumbnailUrl: 'https://avatars.githubusercontent.com/u/94045195?v=4',
    },
  },
};

export const Loading: Story = {
  render: () => <WorkCardLoading />,
};
