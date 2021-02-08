import { createStore, combineReducers } from 'redux';
import { menuClickReducer } from './reducers/reducers';


export const store = createStore(
    combineReducers({
      menuClickReducer
    })
  );