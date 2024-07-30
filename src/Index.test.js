import { render, screen } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  render(<App />);
  const indexElement = screen.getByText(/HRnet/i);
  expect(indexElement).toBeInTheDocument();
});
