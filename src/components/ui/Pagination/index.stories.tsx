import { Pagination } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPage: 10,
    currentPage: 5,
    displayRange: 1,
  },
};

export const DisplayRangeZero: Story = {
  args: {
    totalPage: 10,
    currentPage: 5,
    displayRange: 0,
  },
};

export const DisplayRangeBig: Story = {
  args: {
    totalPage: 10,
    currentPage: 5,
    displayRange: 5,
  },
};

export const One: Story = {
  args: {
    totalPage: 10,
    currentPage: 1,
    displayRange: 1,
  },
};

export const Mid: Story = {
  args: {
    totalPage: 10,
    currentPage: 5,
    displayRange: 1,
  },
};

export const Total: Story = {
  args: {
    totalPage: 10,
    currentPage: 10,
    displayRange: 1,
  },
};

export const LeftEdge: Story = {
  args: {
    totalPage: 10,
    currentPage: 3,
    displayRange: 1,
  },
};

export const RightEdge: Story = {
  args: {
    totalPage: 10,
    currentPage: 8,
    displayRange: 1,
  },
};

export const OnePageOnly: Story = {
  args: {
    totalPage: 1,
    currentPage: 1,
    displayRange: 1,
  },
};
