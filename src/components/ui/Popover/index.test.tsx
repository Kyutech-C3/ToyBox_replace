import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Popover, PopoverTrigger, PopoverContent } from '.';

describe('test ui/Popover', () => {
  it('renders trigger text correctly', () => {
    const triggerText = 'Trigger';
    const screen = render(
      <Popover>
        <PopoverTrigger>{triggerText}</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText(triggerText)).toBeInTheDocument();
  });

  it('renders content correctly', () => {
    const content = 'Content';
    const screen = render(
      <Popover open>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>{content}</PopoverContent>
      </Popover>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.getByText(content)).toHaveClass(
      'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
    );
  });

  it('not renders content by default', () => {
    const content = 'Content';
    const screen = render(
      <Popover>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>{content}</PopoverContent>
      </Popover>
    );

    expect(() => screen.getByText(content)).toThrow();
  });
});
