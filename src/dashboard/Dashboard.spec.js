import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Dashboard />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('unlocked and open by default', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/^unlocked$/i);
    getByText(/^open$/i);
  });
});
