import { Screen as WorkCreate } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkCreate> = {
  component: WorkCreate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkCreate>;

export const Default: Story = {
  args: {},
};