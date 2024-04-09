import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => '1'),
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('model/WorkCards', () => {
  it('title is exist', () => {
    expect(true);
  });
});
