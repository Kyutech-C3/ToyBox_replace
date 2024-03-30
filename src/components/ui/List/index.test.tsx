import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { List, ListItem } from '.';

describe('ui/List', () => {
  it('title is exist', () => {
    render(
      <List>
        <ListItem key="1">Item 1</ListItem>
        <ListItem key="2">Item 2</ListItem>
        <ListItem key="3">Item 3</ListItem>
      </List>
    );

    const title = screen.getByText(/Item 1/);

    expect(title).toBeInTheDocument();
  });
});
