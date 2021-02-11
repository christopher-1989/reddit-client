import { types } from '../actions/types';

export const menuClickedReducer = (state = false, action) => {
  switch (action.type) {
    case types.CLICK:
      return action.payload;
    default:
      return state;
  }
};
  
export const getPostsReducer = (state = [], action) => {
  switch(action.type){
      case types.GET_POSTS:
          return action.payload;
      default:
          return state;
  }
};