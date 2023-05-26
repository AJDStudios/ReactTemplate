import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

test('renders the app component', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('loads the manifest file', () => {
  const { getByTestId } = render(<App />);
  const manifestLink = getByTestId('manifest-link');
  expect(manifestLink).toBeInTheDocument();
  expect(manifestLink.href).toContain('manifest.json');
});

test('does not contain redundant code or comments', () => {
  const { queryByText } = render(<App />);
  expect(queryByText('<!-- Notice the use of %PUBLIC_URL% in the tags above.')).toBeNull();
});


//note that this should be updated if the browser logo is changed
test('renders the new logo', () => {
  const { getByAltText } = render(<App />);
  const logo = getByAltText('New Logo');
  expect(logo).toBeInTheDocument();
  expect(logo.src).toContain('AJDSicon.ico'); 
});


//note that when you remove the splashscreen or update it, this test will also need to be removed or updated
test('renders the splash screen', () => {
  const { getByTestId } = render(<App />);
  const splashScreen = getByTestId('splash-screen');
  expect(splashScreen).toBeInTheDocument();
});

//note that when you remove the splashscreen or update it, this test will also need to be removed or updated
test('displays the correct text in the splash screen', () => {
  const { getByText } = render(<App />);
  const splashText = getByText('An AJDStudios production');
  expect(splashText).toBeInTheDocument();
});

// Add more tests as needed
