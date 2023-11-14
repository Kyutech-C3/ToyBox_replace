import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.';

describe('ui/Dialog', () => {
  it('renders content correctly', () => {
    const header = 'Header';
    const title = 'Title';
    const description = 'Description';

    const screen = render(
      <Dialog modal open>
        <DialogTrigger>Trigger</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {header}
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText(header)).toHaveClass(
      'flex flex-col space-y-1.5 text-center sm:text-left'
    );

    expect(screen.getByText(title)).toHaveClass(
      'text-lg font-semibold leading-none tracking-tight'
    );

    expect(screen.getByText(description)).toHaveClass(
      'text-sm text-muted-foreground'
    );
  });

  it('opens correctly', async () => {
    const trigger = 'Trigger';
    const content = 'Content';

    const screen = render(
      <Dialog modal>
        <DialogTrigger>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>{content}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    // closed by default
    expect(() => screen.getByText(content)).toThrow();

    // open on trigger clicked
    await userEvent.click(screen.getByText(trigger));
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
