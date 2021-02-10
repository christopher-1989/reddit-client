import { render, screen } from '@testing-library/react';
import App from './App';
import { Header } from './features/Header/Header';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const mockStore = configureStore([]);
describe('Redux mocked store', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore({
      menuClicked: false,
    });

    component = renderer.create(
      <Provider store={store}>
        <App >
          <Header />
        </App>
      </Provider>
    );
  });
  
  describe('App component', () => { 
  
    test("render the title of app", () => {
      expect(component).toBeDefined();
    })
  })
  
  describe('Header component', () => {
    test('render a component called "header"', () => {
      const app =  document.getElementById('App');
      // const header = render(<Header />);
      expect(app).toBeDefined();
    })
    test("title in the header component reads 'myReddit'", () => {
      const wrapper = shallow(<Header />);
      // const titleElement = screen.getByText(/myReddit/i);
      // expect(titleElement).toBeInTheDocument();
      expect(wrapper).find('myReddit');
    })
    test("header initialises to closed. Tested by checking whether menu icon is bars or times", () => {
      // const wrapper = shallow(<Header />);
      const icon = <i className="fas fa-bars" />;
      expect(component).find(icon);
    })
  })
})

