import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<Display />', () => {
  it('displays have red-led classes when locked and closed', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);

    const closed = getByText(/closed/i);
    const locked = getByText(/locked/i);
    
    expect(closed.classList).toContain('red-led');
    expect(locked.classList).toContain('red-led');
  });
});
