import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { UserCard } from '.';

describe('model/UserCard', () => {
  it('title is exist', () => {
    render(
      <UserCard
        user={{
          id: '1',
          avatarUrl: '/mocks/mock.png',
          displayName: 'John Doe',
        }}
      />
    );

    const title = screen.getByText(/John Doe/);

    expect(title).toBeInTheDocument();
  });
});
