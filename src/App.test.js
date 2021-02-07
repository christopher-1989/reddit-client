import { render, screen } from '@testing-library/react';
import App from './App';
import { Header } from './features/Header/Header';
import { shallow } from 'enzyme';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App component', () => {
  test("render the title of app", () => {
    render(<App />);
    const app = render(<App />);
    expect(app).toBeDefined();
  })
})

describe('Header component', () => {
  test('render a component called "header"', () => {
    const header = render(<App />, <Header />);
    expect(header).toBeDefined();
  })
  test("title in the header component reads 'myReddit'", () => {
    render(<App />);
    const titleElement = screen.getByText(/myReddit/i);
    expect(titleElement).toBeInTheDocument();
  })
  test("header initialises to closed. Tested by checking whether menu icon is bars or times", () => {
    const wrapper = shallow(<Header />);
    const icon = <i className="fas fa-bars" />;
    expect(wrapper.contains(icon)).toBe(true);
  })
})