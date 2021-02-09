import { types } from '../actions/types';

  export const menuClickedReducer = (state = false, action) => {
    switch (action.type) {
      case types.CLICK:
        return action.payload;
      default:
        return state;
    }
  };
  
