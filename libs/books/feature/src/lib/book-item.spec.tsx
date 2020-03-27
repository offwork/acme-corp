import React from 'react';
import { render } from '@testing-library/react';

import BookItem from './book-item';

describe(' BookItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookItem />);
    expect(baseElement).toBeTruthy();
  });
});
