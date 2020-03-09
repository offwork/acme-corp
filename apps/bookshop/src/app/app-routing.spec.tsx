import React from 'react';
import { render } from '@testing-library/react';

import AppRouting from './app-routing';

describe(' AppRouting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppRouting />);
    expect(baseElement).toBeTruthy();
  });
});
