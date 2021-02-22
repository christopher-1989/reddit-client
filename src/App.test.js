import App from './App.jsx';
import { Header } from './features/Header/Header';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import CardContainer from './components/CardContainer.jsx';

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


describe('Header component', () => {

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
          <Header />
      </Provider>
    );
  });

  it('Should render Header component without errors', () => {
    const uut = component.toJSON().props["data-test"];
    const expected = "headerComponent";  
    expect(uut).toBe(expected);
  });
});


describe('CardContainer component', () => {

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
      }],
      getRedditPosts: []
    });
    component = renderer.create(
      <Provider store={store}>
          <CardContainer />
      </Provider>
    );
  });

  it('Should render CardContainer component without errors', () => {
    const uut = component.toJSON().props["data-test"];
    const expected = "cardContainerComponent";  
    expect(uut).toBe(expected);
  });
});