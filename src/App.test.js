import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Hospital Address test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Shaguna More/i);
  expect(linkElement).toBeInTheDocument();
});

test('Hospital Phone number', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/91 860 334 8924/i);
  expect(linkElement).toBeInTheDocument();
});

test('Hospital Subtext', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Passion for Cure/i);
  expect(linkElement).toBeInTheDocument();
});
