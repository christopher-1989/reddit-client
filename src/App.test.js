import App from './App';
import { shallow } from 'enzyme';
import {findByTestAtrr } from '../src/utils/index';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { PropTypes } from 'prop-types';


describe('App component', () => {
   
  describe('App component renders', () => { 
    let mockedStore = configureStore([])({});
      const wrapper = mount(<App />, {
        context: { store: mockedStore },
    });
        it("Should render without error", () => {
          const component = findByTestAtrr(wrapper, 'App');
          expect(component.length).toBe(1);

      });
    });
  });