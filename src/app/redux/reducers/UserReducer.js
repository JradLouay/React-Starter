import {
    SET_USER_DATA,
    REMOVE_USER_DATA,
    USER_LOGGED_OUT
  } from "../actions/UserActions";
  
  const initialState = {
    name: 'louay',
    pwd: 'louay2008'
  };
  
  const userReducer = function(state = initialState, action) {
    switch (action.type) {
      case SET_USER_DATA: {
        return {
          ...state,
          ...action.data
        };
      }
      case REMOVE_USER_DATA: {
        return {
          ...state
        };
      }
      case USER_LOGGED_OUT: {
        return state;
      }
      default: {
        return state;
      }
    }
  };
  
  export default userReducer;
  