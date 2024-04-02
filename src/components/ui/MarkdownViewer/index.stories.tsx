import { MarkdownViewer } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MarkdownViewer> = {
  component: MarkdownViewer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MarkdownViewer>;

export const Default: Story = {
  args: {},
};
