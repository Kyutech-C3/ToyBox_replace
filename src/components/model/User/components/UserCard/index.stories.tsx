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
  args: {},
};

export const Loading: Story = {
  render: ()=> <UserCardLoading />
};
