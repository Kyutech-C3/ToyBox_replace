import { TagSearchInputPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagSearchInputPresentation> = {
  component: TagSearchInputPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TagSearchInputPresentation>;

export const Default: Story = {};
