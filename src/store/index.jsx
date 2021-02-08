import { createStore, combineReducers } from 'redux';
import { menuClickedReducer } from './reducers/reducers';

const allReducers = combineReducers({
  menuClicked: menuClickedReducer
})

export const store = createStore(
    allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );