import { UserCardLoading } from './loading';
import { UserCard } from './main';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    user: {
      id: '1',
      displayName: 'ユーザー名',
      avatarUrl: 'https://placehold.jp/150x150.png',
    },
  },
};

export const Loading: Story = {
  render: () => <UserCardLoading />,
};
