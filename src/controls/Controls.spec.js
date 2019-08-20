import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

const testConfigs = [
  {
    locked: false,
    closed: false,
  },
  {
    locked: false,
    closed: true,
  },
  {
    locked: true,
    closed: true,
  },
];

const mocks = {
  toggleLocked: jest.fn(),
  toggleClosed: jest.fn(),
}

describe('<Controls />', () => {
  it('cannot lock an open gate', () => {
    const { getByText } = render(<Controls locked={false} closed={false} {...mocks} />);

    fireEvent.click(getByText(/^lock gate$/i));
    expect(mocks.toggleLocked).toBeCalledTimes(0);
  });

  it('can close an open gate', () => {
    const { getByText } = render(<Controls locked={false} closed={false} {...mocks} />);

    fireEvent.click(getByText(/^close gate$/i));
    expect(mocks.toggleClosed).toBeCalledTimes(1);
  });

  it('can lock a closed gate', () => {
    const { getByText } = render(<Controls locked={false} closed={true} {...mocks} />);

    fireEvent.click(getByText(/^lock gate$/i));
    expect(mocks.toggleLocked).toBeCalledTimes(1);
  });

  it('can open a closed gate', () => {
    const { getByText } = render(<Controls locked={false} closed={true} {...mocks} />);

    fireEvent.click(getByText(/^open gate$/i));
    expect(mocks.toggleClosed).toBeCalledTimes(2);
  });

  it('can unlock a locked gate', () => {
    const { getByText } = render(<Controls locked={true} closed={true} {...mocks} />);

    fireEvent.click(getByText(/^unlock gate$/i));
    expect(mocks.toggleLocked).toBeCalledTimes(2);
  });

  it('cannot open a locked gate', () => {
    const { getByText } = render(<Controls locked={true} closed={true} {...mocks} />);

    fireEvent.click(getByText(/^open gate$/i));
    expect(mocks.toggleClosed).toBeCalledTimes(2);
  });
});
