import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '.';

import type { Meta, StoryObj } from '@storybook/react';

type AccordionPropsAndCustomArgs = React.ComponentProps<typeof Accordion> & {
  type: 'single' | 'multiple';
};

const meta: Meta<AccordionPropsAndCustomArgs> = {
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
      description:
        'Determines whether one or multiple items can be opened at the same time.',
      defaultValue: 'single',
    },
  },
};

export default meta;

type Story = StoryObj<AccordionPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    type: 'single',
  },
  render: (args: AccordionPropsAndCustomArgs) => (
    <div className="w-96">
      <Accordion type={args.type} collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion Trigger 1</AccordionTrigger>
          <AccordionContent>Accordion content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accordion Trigger 2</AccordionTrigger>
          <AccordionContent>Accordion content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const TypeSingle: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion Trigger 1</AccordionTrigger>
          <AccordionContent>Accordion content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accordion Trigger 2</AccordionTrigger>
          <AccordionContent>Accordion content 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Accordion Trigger 3</AccordionTrigger>
          <AccordionContent>Accordion content 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const TypeMultiple: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion Trigger 1</AccordionTrigger>
          <AccordionContent>Accordion content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accordion Trigger 2</AccordionTrigger>
          <AccordionContent>Accordion content 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Accordion Trigger 3</AccordionTrigger>
          <AccordionContent>Accordion content 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion Trigger</AccordionTrigger>
          <AccordionContent>
            This is a very long accordion content for checking whether the
            content will be in multiple lines or not.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
