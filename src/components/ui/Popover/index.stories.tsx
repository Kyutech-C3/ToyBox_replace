import { Button } from '../Button';

import { Popover, PopoverTrigger, PopoverContent } from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '@/libs/utils';

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Popover</PopoverTrigger>
      <PopoverContent>Content</PopoverContent>
    </Popover>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Popover</Button>
      </PopoverTrigger>
      <PopoverContent className={cn('text-white', 'bg-black')}>
        Content
      </PopoverContent>
    </Popover>
  ),
};
