import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fictional Feud Frenzy title', () => {
  render(<App />);
  const fictionalFeudFrenzy = screen.getByText(/Fictional Feud Frenzy/i);
  expect(fictionalFeudFrenzy).toBeInTheDocument();
});
