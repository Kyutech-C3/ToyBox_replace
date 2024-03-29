import { DateDiffLabel } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateDiffLabel> = {
  component: DateDiffLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DateDiffLabel>;

export const Default: Story = {
  args: { date: new Date() },
};

export const SecAgo: Story = {
  args: { date: new Date(Date.now() - 1000) },
};

export const MinAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60) },
};

export const HourAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60) },
};

export const DayAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24) },
};

export const WeekAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) },
};

export const MonthAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30) },
};

export const TwoMonthAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 2) },
};

export const ThreeMonthAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 3) },
};

export const SixMonthAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 6) },
};

export const YearAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365) },
};

export const TwoYearAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 2) },
};
