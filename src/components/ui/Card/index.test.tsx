import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '.';

describe('ui/Cardのテスト', () => {
  it('renders the Card component', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass(
      'rounded-lg border bg-card text-card-foreground shadow-sm'
    );
  });

  it('renders the CardHeader component', () => {
    const { container } = render(<CardHeader />);
    expect(container.firstChild).toHaveClass('flex flex-col space-y-1.5 p-6');
  });

  it('renders the CardFooter component', () => {
    const { container } = render(<CardFooter />);
    expect(container.firstChild).toHaveClass('flex items-center p-6 pt-0');
  });

  it('renders the CardTitle component', () => {
    const { container } = render(<CardTitle />);
    expect(container.firstChild).toHaveClass(
      'text-2xl font-semibold leading-none tracking-tight'
    );
  });

  it('renders the CardDescription component', () => {
    const { container } = render(<CardDescription />);
    expect(container.firstChild).toHaveClass('text-sm text-muted-foreground');
  });

  it('renders the CardContent component', () => {
    const { container } = render(<CardContent />);
    expect(container.firstChild).toHaveClass('p-6 pt-0');
  });
});
