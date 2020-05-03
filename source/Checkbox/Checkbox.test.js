import React, { useState } from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Checkbox from './Checkbox';

afterEach(cleanup);

const TestComponent = () => {
  const [isDogOwner, setIsDogOwner] = useState(false);
  return (
    <>
      <Checkbox label='Check this!' checked={isDogOwner} onCheck={setIsDogOwner} />
      <br />This person is {isDogOwner ? '' : 'not' } a dog owner;
    </>
  );
};

describe('multi-select', () => {
  it('shows correct message', () => {
    render(<TestComponent />);
    const label = 'Check this!';
    expect(screen.queryAllByText(label).length).toBe(1);
    expect(screen.queryByText('This person is not a dog owner'));
    fireEvent.click(screen.queryByText(label));
    expect(screen.queryByText('This person is a dog owner'));
    fireEvent.click(screen.queryByText(label));
    expect(screen.queryByText('This person is not a dog owner'));
  });
});
