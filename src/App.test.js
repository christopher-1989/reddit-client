import App from './App.jsx';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from '../src/utils/index';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe('App component', () => {

  let wrapper;
  beforeEach(() => {
    const initialState = {
      getPosts: [{
        title: 'Example Title 1',
        body: 'Some text'
      },
      {
        title: 'Example Title 2',
        body: 'Some text'
      },
      {
        title: 'Example Title 3',
        body: 'Some text'
      }]
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });

});