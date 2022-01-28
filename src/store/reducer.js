import { combineReducers } from "redux";

const INITIAL_STATE = {
  user: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
