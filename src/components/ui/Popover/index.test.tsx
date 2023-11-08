import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Popover, PopoverTrigger, PopoverContent } from '.';

describe('ui/Popoverのテスト', () => {
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
