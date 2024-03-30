import { WithHeader } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WithHeader> = {
  component: WithHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WithHeader>;

export const Default: Story = {
  args: {
    children: <div>いい感じのメインコンテンツ</div>,
  },
  decorators: [
    (Story): JSX.Element => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
};
