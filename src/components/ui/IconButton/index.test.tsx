import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { IconButton } from '.';

describe('test ui/IconButton', () => {
  // Test rendering with 'default' variant
  it('renders the default variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(
      <IconButton>
        <span className="text-xl">👍</span>
      </IconButton>
    );

    expect(firstChild).toHaveClass('text-sm font-medium transition-colors');
  });

  // Test that children are rendered properly
  it('renders children correctly', () => {
    const { container } = render(
      <IconButton>
        <span className="text-xl">👍</span>
      </IconButton>
    );
    expect(container.querySelector('span')).toBeInTheDocument();
  });
});
