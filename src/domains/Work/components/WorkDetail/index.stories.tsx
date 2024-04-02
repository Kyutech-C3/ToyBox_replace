import { WorkDetailPresentation } from './presentations';
import { WorkDetailEmptyPresentation } from './presentations/empty';
import { WorkDetailErrorPresentation } from './presentations/error';
import { WorkDetailLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkDetailPresentation> = {
  component: WorkDetailPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkDetailPresentation>;

export const Default: Story = {
  args: {},
};

export const Empty: Story = {
  render: () => <WorkDetailEmptyPresentation />,
};

export const Error: Story = {
  render: () => <WorkDetailErrorPresentation />,
};

export const Loading: Story = {
  render: () => <WorkDetailLoadingPresentation />,
};
