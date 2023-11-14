import { Button } from '../Button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.';

import type { Meta, StoryObj } from '@storybook/react';

type DialogPropsAndCustomArgs = React.ComponentProps<typeof Dialog> & {
  modal?: boolean;
  defaultOpen?: boolean;
};

const meta: Meta<DialogPropsAndCustomArgs> = {
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modal: {
      control: { type: 'boolean' },
      defaultValue: true,
      description:
        'The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.',
    },
    defaultOpen: {
      control: { type: 'boolean' },
      defaultValue: false,
      description:
        'The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.',
    },
  },
};

export default meta;

type Story = StoryObj<DialogPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    modal: true,
  },
  render: (args) => (
    <Dialog modal={args.modal || false} defaultOpen={args.defaultOpen || false}>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="bg-primary text-primary-foreground">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog Description</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};

export const Modal: Story = {
  args: {
    modal: true,
  },
  render: (args) => (
    <Dialog modal={args.modal || false} defaultOpen={args.defaultOpen || false}>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="bg-primary text-primary-foreground">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog Description</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};

export const NotModal: Story = {
  args: {
    modal: false,
  },
  render: (args) => (
    <Dialog modal={args.modal || false} defaultOpen={args.defaultOpen || false}>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="bg-primary text-primary-foreground">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog Description</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};
