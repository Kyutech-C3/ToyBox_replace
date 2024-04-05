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
  args: {},
};

export const Loading: Story = {
  render: ()=> <TagListLoading />
};
