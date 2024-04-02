import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { AssetList } from '.';

describe('model/AssetList', () => {
  it('title is exist', () => {
    render(<AssetList assets={[]} />);
  });
});
