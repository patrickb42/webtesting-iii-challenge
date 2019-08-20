import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<Display />', () => {
  it('unlocked and open by default', () => {
    const { getByText } = render(<Display />);

    getByText(/^unlocked$/i);
    getByText(/^open$/i);
  });
});
