import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

test('renders the logo and its link to "/"', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const logoLink = screen.getByRole('link', { name: /An AJDStudios production/i });
  expect(logoLink).toBeInTheDocument();
  expect(logoLink).toHaveAttribute('href', '/');
});

test('renders text below the logo', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const logoText = screen.getByText(/An AJDStudios production/i);
  expect(logoText).toBeInTheDocument();
});
