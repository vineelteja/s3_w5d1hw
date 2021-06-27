import { TOGGLE_DARKTHEME } from "../actions";
import { combineReducers } from "redux";

const defaultState = {
  isDarkThemeOn: false,
};

const preference = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return { ...state, isDarkThemeOn: !state.isDarkThemeOn };
    default:
      return state;
  }
};

export default combineReducers({ preference });
