import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '.';

describe('ui/Accordion', () => {
  it('renders trigger text correctly', () => {
    const triggerText = 'Trigger';
    const screen = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{triggerText}</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText(triggerText)).toBeInTheDocument();
  });

  it('renders content text correctly', () => {
    const contentText = 'Content';
    const screen = render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>{contentText}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('renders components with correct classes', () => {
    const triggerText = 'Trigger';
    const contentText = 'Content';

    const screen = render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>{triggerText}</AccordionTrigger>
          <AccordionContent>{contentText}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText(triggerText)).toHaveClass(
      'flex flex-1 items-center justify-between py-4 font-medium transition-all'
    );
    expect(screen.getByText(contentText)).toHaveClass('pb-4 pt-0');
  });

  it('accordion works correctly by clicking', async () => {
    const trigger1 = 'Trigger 1';
    const trigger2 = 'Trigger 2';
    const content1 = 'Content 1';
    const content2 = 'Content 2';

    const screen = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{trigger1}</AccordionTrigger>
          <AccordionContent>{content1}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{trigger2}</AccordionTrigger>
          <AccordionContent>{content2}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    // closed by default
    expect(() => screen.getByText(content1)).toThrow();
    expect(() => screen.getByText(content2)).toThrow();

    // open first item
    await userEvent.click(screen.getByText(trigger1));

    // first item is open, second is closed
    expect(screen.getByText(content1)).toBeInTheDocument();
    expect(() => screen.getByText(content2)).toThrow();

    // open second item
    await userEvent.click(screen.getByText(trigger2));

    // first item is closed, second is open
    expect(() => screen.getByText(content1)).toThrow();
    expect(screen.getByText(content2)).toBeInTheDocument();

    // close second item
    await userEvent.click(screen.getByText(trigger2));

    // both items are closed
    expect(() => screen.getByText(content1)).toThrow();
    expect(() => screen.getByText(content2)).toThrow();
  });
});
