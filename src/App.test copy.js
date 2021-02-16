import { render, screen } from '@testing-library/react';
import App from './App';
import { Header } from './features/Header/Header';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import {findByTestAtrr, checkProps } from '../src/utils/index';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// const mockStore = configureStore([]);
describe('Redux mocked store', () => {
  

  //   component = renderer.create(
  //     <Provider store={store}>
  //       <App >
  //         <Header />
  //       </App>
  //     </Provider>
  //   );
  // });
  
  describe('App component', () => { 
    let store;
    let component;
    let wrapper
    
    beforeEach(() => {
      
      // store = mockStore({
      //   menuClicked: false,
      // });
      const props = {
        menuClicked: false
      };
      wrapper = shallow(<App {...props} />);
    })
    // test("render the title of app", () => {
    //   expect(component).toBeDefined();
    // })
    it('Should render without error', () => {
      const component = findByTestAtrr(wrapper, 'App');
      expect(component.length).toBe(1);
    });

  })
  
  // describe('Header component', () => {
  //   test('render a component called "header"', () => {
  //     const app =  document.getElementById('App');
  //     // const header = render(<Header />);
  //     expect(app).toBeDefined();
  //   })
  //   test("title in the header component reads 'myReddit'", () => {
  //     const wrapper = shallow(<Header />);
  //     // const titleElement = screen.getByText(/myReddit/i);
  //     // expect(titleElement).toBeInTheDocument();
  //     expect(wrapper).find('myReddit');
  //   })
  //   test("header initialises to closed. Tested by checking whether menu icon is bars or times", () => {
  //     // const wrapper = shallow(<Header />);
  //     const icon = <i className="fas fa-bars" />;
  //     expect(component).find(icon);
  //   })
  // })
})

