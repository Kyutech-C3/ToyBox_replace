import { WorkEditPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkEditPresentation> = {
  component: WorkEditPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkEditPresentation>;

export const Default: Story = {
  args: {},
};
