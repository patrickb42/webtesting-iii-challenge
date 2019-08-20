import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
  it('displays have green-led classes when unlocked and open', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);

    const open = getByText(/^open$/i);
    const unlocked = getByText(/^unlocked$/i);
    
    expect(open).toHaveClass('green-led');
    expect(unlocked).toHaveClass('green-led');
  });

  it('displays have red-led classes when locked and closed', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);

    const closed = getByText(/^closed$/i);
    const locked = getByText(/^locked$/i);
    
    expect(closed).toHaveClass('red-led');
    expect(locked).toHaveClass('red-led');
  });
});
