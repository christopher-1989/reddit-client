import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App component', () => {
  test("render the title of app", () => {
    render(<App />);
    const titleElement = screen.getByText(/myReddit/i);
    expect(titleElement).toBeInTheDocument();
  })
})