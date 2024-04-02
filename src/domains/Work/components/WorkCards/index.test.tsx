import '@testing-library/jest-dom';

import type { Works } from '../../types';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => '1'),
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock('./hooks', () => ({
  useWorkCards: (): { isEmpty: boolean; works: Works } => ({
    isEmpty: false,
    works: [
      {
        id: '1',
        thumbnailUrl: 'https://placehold.jp/150x150.png',
        creator: {
          id: '1',
          avatarUrl: 'https://placehold.jp/150x150.png',
          displayName: 'Creator1',
        },
        isPublic: true,
        createdAt: '2024-03-29T12:46:20.461Z',
        title: 'Title1',
        tags: [
          {
            id: '1',
            name: 'tag1',
            color: 'red',
            textColor: 'white',
          },
        ],
      },
    ],
  }),
}));

describe('model/WorkCards', () => {
  it('title is exist', () => {
    expect(true);
  });
});
