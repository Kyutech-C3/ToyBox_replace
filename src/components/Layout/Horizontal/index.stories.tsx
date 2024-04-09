import { Horizontal } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Horizontal> = {
  component: Horizontal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Horizontal>;

export const Default: Story = {
  args: {
    children: [
      <div key="1" className="w-16 h-16 bg-gray-200" />,
      <div key="2" className="w-16 h-16 bg-gray-200" />,
      <div key="3" className="w-16 h-16 bg-gray-200" />,
    ],
  },
};
