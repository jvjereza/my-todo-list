import '@testing-library/jest-dom/extend-expect';
import App from './App.js';
import { render } from '@testing-library/react';

test('renders a heading with the correct text', () => {
  const { getByRole } = render(<App />);
  const heading = getByRole('heading', { name: /my todo list/i });
  expect(heading).toHaveTextContent('My Todo List');
});

