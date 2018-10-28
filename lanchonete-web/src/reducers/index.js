import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { SET_DATA} from "../constants/action-types";

const initialState = {
  sandwich: {},
  ingrediente: {}
};


const menu = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        sandwich: action.sandwich,
        ingrediente: action.ingrediente
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  routing: routerReducer,
  menu
});

export default rootReducer;
