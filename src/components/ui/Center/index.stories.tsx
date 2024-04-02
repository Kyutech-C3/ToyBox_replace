import { Center } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Center> = {
  component: Center,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Center>;

export const Default: Story = {
  args: {},
};
