import { createStore, combineReducers, applyMiddleware } from 'redux';
import { menuClickedReducer, getPostsReducer, getSubredditTitlesReducer, getPageTitleReducer } from './reducers/reducers';
import ReduxThunk from 'redux-thunk';

export const allReducers = combineReducers({
  menuClicked: menuClickedReducer,
  getPosts: getPostsReducer,
  getSubredditTitles: getSubredditTitlesReducer,
  getPageTitle: getPageTitleReducer
})

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(
    allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );