const initialState = {
    menuClicked: false
  };
  
  export const menuClickReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CLICK":
        return {
          menuClicked: action.payload
        };
      default:
        return state;
    }
  };
  
