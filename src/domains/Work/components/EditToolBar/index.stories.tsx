
import { EditToolBar } from './main';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditToolBar> = {
  component: EditToolBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EditToolBar>;

export const Default: Story = {
  args: {},
};


