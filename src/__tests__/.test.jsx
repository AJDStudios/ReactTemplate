import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the app component', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

//any new tests can be added from here