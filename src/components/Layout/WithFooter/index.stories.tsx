import { WithFooter } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WithFooter> = {
  component: WithFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WithFooter>;

export const Default: Story = {
  args: {
    children: <div>いい感じのメインコンテンツ</div>,
  },
};
