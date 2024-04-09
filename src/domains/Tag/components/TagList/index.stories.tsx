import { TagListLoading } from './loading';
import { TagList } from './main';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagList> = {
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: [
      {
        id: '1',
        name: 'タグ名',
        color: 'red',
        textColor: 'white',
      },
      {
        id: '2',
        name: 'タグ名',
        color: 'yellow',
        textColor: 'white',
      },
    ],
  },
};

export const Loading: Story = {
  render: () => <TagListLoading />,
};
