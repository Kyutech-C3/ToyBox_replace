import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Avatar, AvatarFallback, AvatarImage } from '.';

describe('test ui/Avatar', () => {
  it('renders Avatar correctly', () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).toHaveClass(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
    );
  });

  it('renders Avatar with AvatarImage, AvatarFallback correctly', () => {
    const fallbackText = 'FB';
    const imageUrl = 'https://github.com/shadcn.png';
    render(
      <Avatar>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{fallbackText}</AvatarFallback>
      </Avatar>
    );

    const fallback = screen.getByText(fallbackText);
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveClass(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
    );

    expect(fallback.parentElement).toHaveClass(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
    );
  });
});
