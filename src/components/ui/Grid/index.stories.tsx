import { Grid, GridItem } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Grid> = {
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: [
      <GridItem key={1}>1</GridItem>,
      <GridItem key={2}>2</GridItem>,
      <GridItem key={3}>3</GridItem>,
      <GridItem key={4}>4</GridItem>,
      <GridItem key={5}>5</GridItem>,
      <GridItem key={6}>6</GridItem>,
      <GridItem key={7}>7</GridItem>,
      <GridItem key={8}>8</GridItem>,
      <GridItem key={9}>9</GridItem>,
    ],
  },
};
