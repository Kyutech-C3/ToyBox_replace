import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { WorkCard } from '.';

import type { ImageProps } from 'next/image';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps & { src?: string }): JSX.Element => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={props.src} alt={props.alt} />
  ),
}));

describe('model/WorkCard', () => {
  const mockProps = {
    id: '1',
    isPublic: true,
    title: 'Sample Title',
    tags: [
      { id: '1', name: 'Tag 1', color: 'red', textColor: 'white' },
      { id: '2', name: 'Tag 2', color: 'blue', textColor: 'white' },
    ],
    creator: {
      id: '1',
      avatarUrl: '/mocks/mock.png',
      displayName: 'John Doe',
    },
    createdAt: '2022-01-01',
    thumbnailUrl: '/mocks/mock.png',
  };

  it('renders the WorkCard component', () => {
    const { container } = render(<WorkCard work={mockProps} />);
    expect(container.firstChild).toHaveClass('p-2 w-60 h-80');
  });

  it('renders the thumbnail image', () => {
    const { getByAltText } = render(<WorkCard work={mockProps} />);
    const thumbnailImage = getByAltText(`${mockProps.title}のサムネイル`);
    expect(thumbnailImage).toBeInTheDocument();
    expect(thumbnailImage).toHaveAttribute('src', mockProps.thumbnailUrl);
  });

  it('renders the title', () => {
    const { getByText } = render(<WorkCard work={mockProps} />);
    const titleElement = getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the tags', () => {
    const { getByText } = render(<WorkCard work={mockProps} />);
    mockProps.tags.forEach((tag) => {
      const tagElement = getByText(tag.name);
      expect(tagElement).toBeInTheDocument();
    });
  });

  it('renders the creator', () => {
    const { getByText } = render(<WorkCard work={mockProps} />);
    const creatorElement = getByText(mockProps.creator.displayName);
    expect(creatorElement).toBeInTheDocument();
  });

  it('renders the creation date', () => {
    const { getByText } = render(<WorkCard work={mockProps} />);
    const creationDateElement = getByText('2022/01/01');
    expect(creationDateElement).toBeInTheDocument();
  });
});
