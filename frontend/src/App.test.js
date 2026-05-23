import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app shell', () => {
  render(<App />);
  expect(screen.getAllByText(/akis detailing/i).length).toBeGreaterThan(0);
});
