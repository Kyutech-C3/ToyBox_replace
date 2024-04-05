import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Button } from '.';

describe('ui/Buttonのテスト', () => {
  // Test rendering with 'default' variant
  it('renders the default variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<Button>test</Button>);

    expect(firstChild).toHaveClass(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-pop text-primary-foreground hover:bg-orange-sub h-10 px-4 py-2'
    );
  });

  // Test rendering with 'secondary' variant
  it('renders the secondary variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<Button variant="secondary">test</Button>);

    expect(firstChild).toHaveClass(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2'
    );
  });

  // Test rendering with 'destructive' variant
  it('renders the destructive variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<Button variant="destructive">test</Button>);

    expect(firstChild).toHaveClass(
      'bg-destructive text-destructive-foreground'
    );
  });

  // Test rendering with 'outline' variant
  it('renders the outline variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<Button variant="outline">test</Button>);

    expect(firstChild).toHaveClass('border border-input bg-background');
  });

  // Test rendering with 'link' variant
  it('renders the link variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<Button variant="link">test</Button>);

    expect(firstChild).toHaveClass(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-orange-pop underline-offset-4 hover:underline h-10 px-4 py-2'
    );
  });

  it('renders children correctly', () => {
    const text = 'Test';
    const screen = render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders start-icon correctly', () => {
    const icon = '👍';
    const screen = render(<Button startIcon={icon}>test</Button>);

    expect(screen.getByText(icon)).toBeInTheDocument();
  });

  it('renders end-icon correctly', () => {
    const icon = '👍';
    const screen = render(<Button endIcon={icon}>test</Button>);

    expect(screen.getByText(icon)).toBeInTheDocument();
  });
});
