import { render } from '@testing-library/react';

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

  it('accordion is closed default', () => {
    const contentText = 'Content';
    const screen = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>{contentText}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(() => screen.getByText(contentText)).toThrow();
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
});
