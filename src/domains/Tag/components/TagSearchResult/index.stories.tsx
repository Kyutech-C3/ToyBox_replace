import { TagSearchResultPresentation } from './presentations';
import { TagSearchResultEmptyPresentation } from './presentations/empty';
import { TagSearchResultErrorPresentation } from './presentations/error';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagSearchResultPresentation> = {
  component: TagSearchResultPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TagSearchResultPresentation>;

export const Default: Story = {
  args: {
    tags: [
      {
        id: '1',
        name: 'タグ名',
        color: 'red',
        textColor: 'white',
      },
      {
        id: '2',
        name: 'タグ名',
        color: 'yellow',
        textColor: 'white',
      },
    ],
  },
};

export const Empty: Story = {
  render: () => <TagSearchResultEmptyPresentation />,
};

export const Error: Story = {
  render: () => <TagSearchResultErrorPresentation />,
};
