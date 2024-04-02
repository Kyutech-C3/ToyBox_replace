import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Center } from '.';

describe('ui/Center', () => {
  it('title is exist', () => {
    render(<Center>center</Center>);
  });
});
