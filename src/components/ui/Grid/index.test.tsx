import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Grid, GridItem } from '.';

describe('ui/Grid', () => {
  it('title is exist', () => {
    render(
      <Grid>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      </Grid>
    );

    const title = screen.getByText(/1/);

    expect(title).toBeInTheDocument();
  });
});
