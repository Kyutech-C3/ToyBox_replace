import { List, ListItem } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof List> = {
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    children: [
      <ListItem key="1">Item 1</ListItem>,
      <ListItem key="2">Item 2</ListItem>,
      <ListItem key="3">Item 3</ListItem>,
    ],
  },
};
