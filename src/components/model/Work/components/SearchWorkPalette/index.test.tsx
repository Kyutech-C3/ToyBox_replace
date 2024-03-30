import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { SearchWorkPalette } from '.';

import type { IUseSearchWorkPalette } from './hooks';

jest.mock('./hooks', () => ({
  useSearchWorkPalette: (): IUseSearchWorkPalette => ({
    tags: [
      {
        id: '1',
        name: 'tag1',
        color: '#000000',
        textColor: '#ffffff',
      },
      {
        id: '2',
        name: 'tag2',
        color: '#000000',
        textColor: '#ffffff',
      },
    ],
    query: {
      tagIds: ['1', '2'],
      visibility: undefined,
      page: 1,
      limit: 10,
      searchWord: '',
      tagNames: [],
    },
    keyword: '',
    setSearchWord: jest.fn(),
    handleChangeKeyword: jest.fn(),
    handleChangeTagId: jest.fn(),
    handleChangeVisibility: jest.fn(),
  }),
}));

describe('model/SearchWorkPalette', () => {
  it('title is exist', () => {
    render(<SearchWorkPalette />);

    const title = screen.getByText(/tag1/);

    expect(title).toBeInTheDocument();
  });
});
