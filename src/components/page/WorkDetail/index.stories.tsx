import { Screen as WorkDetail } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkDetail> = {
  component: WorkDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkDetail>;

export const Default: Story = {
  args: {},
};