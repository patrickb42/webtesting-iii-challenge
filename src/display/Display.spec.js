import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<Display />', () => {
  it('displays have green-led classes when unlocked and open', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);

    const closed = getByText(/open/i);
    const locked = getByText(/unlocked/i);
    
    expect(closed.className).toMatch(/green-led/);
    expect(locked.className).toMatch(/green-led/);
  });

  it('displays have red-led classes when locked and closed', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);

    const closed = getByText(/closed/i);
    const locked = getByText(/locked/i);
    
    expect(closed.className).toMatch(/red-led/);
    expect(locked.className).toMatch(/red-led/);
  });
});
