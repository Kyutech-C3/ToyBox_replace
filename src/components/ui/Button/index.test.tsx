import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Button } from '.';

describe('ui/Buttonのテスト', () => {
  // Test rendering with 'default' variant
  it('renders the default variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<Button>test</Button>);

    expect(firstChild).toHaveClass('bg-primary text-primary-foreground');
  });

  // Test rendering with 'secondary' variant
  it('renders the secondary variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<Button variant="secondary">test</Button>);

    expect(firstChild).toHaveClass('bg-secondary text-secondary-foreground');
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

    expect(firstChild).toHaveClass('text-primary underline-offset-4');
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
