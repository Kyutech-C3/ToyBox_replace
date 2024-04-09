import { SearchWorkPalettePresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchWorkPalettePresentation> = {
  component: SearchWorkPalettePresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchWorkPalettePresentation>;

export const Default: Story = {
  args: {
    handleChangeKeyword: () => {},
    handleChangeTagId: () => {},
    handleChangeVisibility: () => {},
  },
};
