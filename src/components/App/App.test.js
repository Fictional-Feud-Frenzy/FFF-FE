import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders Fictional Feud Frenzy title', () => {
  render(
  <MemoryRouter>
    <App />
  </MemoryRouter>);
  const fictionalFeudFrenzy = screen.getByText(/Fictional Feud Frenzy/i);
  expect(fictionalFeudFrenzy).toBeInTheDocument();
});
