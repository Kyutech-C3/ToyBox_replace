import { Button } from '../Button';

import { Popover, PopoverTrigger, PopoverContent } from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { cn } from '@/libs/utils';

type PopoverPropsAndCustomArgs = React.ComponentProps<typeof Popover> & {
  align?: 'center' | 'start' | 'end';
};

const meta: Meta<PopoverPropsAndCustomArgs> = {
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: ['center', 'start', 'end'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<PopoverPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    align: 'start',
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger>Popover</PopoverTrigger>
      <PopoverContent {...args}>Content</PopoverContent>
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

export const AlignStart: Story = {
  args: {
    align: 'start',
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args} className={cn('text-white', 'bg-black')}>
        Content
      </PopoverContent>
    </Popover>
  ),
};

export const AlignCenter: Story = {
  args: {
    align: 'center',
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args} className={cn('text-white', 'bg-black')}>
        Content
      </PopoverContent>
    </Popover>
  ),
};

export const AlignEnd: Story = {
  args: {
    align: 'end',
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args} className={cn('text-white', 'bg-black')}>
        Content
      </PopoverContent>
    </Popover>
  ),
};

export const Opened: Story = {
  render: () => (
    <Popover open>
      <PopoverTrigger asChild>
        <Button>Popover</Button>
      </PopoverTrigger>
      <PopoverContent className={cn('text-white', 'bg-black')}>
        Content
      </PopoverContent>
    </Popover>
  ),
};
