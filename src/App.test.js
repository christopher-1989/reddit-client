import App from './App.jsx';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('App component', () => {

  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
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
    });
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it('Should render without errors', () => {
    const uut = component.toJSON().props["data-test"];
    const expected = "appComponent";  
    expect(uut).toBe(expected);
  });
});