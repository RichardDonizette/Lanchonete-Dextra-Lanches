import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { SET_DATA, SELECT_SANDWICH, CUSTOMIZE_SANDWICH, CLOSE_CUSTOMIZE_SANDWICH, REMOVE_INGREDIENT_SANDWICH, ADD_INGREDIENT_SANDWICH } from "../constants/action-types";



const menu = (
  state = {
    sandwich: [],
    ingrediente: []
  }, action) => {
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

const selectSandwich = (
  state = {
    sandwich: [],
    sandwichCostumize: [],
    customizeSandwichModal: false,
  }, action) => {
  switch (action.type) {
    case SELECT_SANDWICH:
      return {
        ...state,
        sandwich: state.sandwich.concat(action.sandwich),
      };
    case CUSTOMIZE_SANDWICH:
      return {
        ...state,
        sandwichCostumize: action.sandwichCostumize,
        customizeSandwichModal: true,
      };
    case CLOSE_CUSTOMIZE_SANDWICH:
      return {
        ...state,
        sandwichCostumize: [],
        customizeSandwichModal: false,
      };
    case ADD_INGREDIENT_SANDWICH:
      return {
        ...state,
        sandwichCostumize: {
          ingredients: state.sandwichCostumize.ingredients.concat(action.ingrediente)
        },
      };
    case REMOVE_INGREDIENT_SANDWICH:
      state.sandwichCostumize.ingredients.splice(action.index, 1)
      return {
        ...state,
        sandwichCostumize: {
          ingredients: state.sandwichCostumize.ingredients
        },
      };
    default:
      return state;
  }
}

const createSandwich = (state = {}, action) => {
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
}

const cart = (state = {}, action) => {
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
}

const rootReducer = combineReducers({
  routing: routerReducer,
  menu,
  selectSandwich,
  createSandwich,
  cart
});

export default rootReducer;
