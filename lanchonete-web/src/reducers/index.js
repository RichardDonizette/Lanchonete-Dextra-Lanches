import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  SET_DATA, SELECT_SANDWICH, CUSTOMIZE_SANDWICH, CLOSE_CUSTOMIZE_SANDWICH, REMOVE_INGREDIENT_SANDWICH, ADD_INGREDIENT_SANDWICH,
  ADD_SANDWICH_CART, REMOVE_SANDWICH_CART
} from "../constants/action-types";

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
    sandwichCostumize: {
      Name: '',
      ingredients: []
    },
    costumizePrice: 0.0,
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
        costumizePrice: action.costumizePrice,
        customizeSandwichModal: true,
      };
    case CLOSE_CUSTOMIZE_SANDWICH:
      return {
        ...state,
        sandwichCostumize: {
          Name: '',
          ingredients: []
        },
        customizeSandwichModal: false,
      };
    case ADD_INGREDIENT_SANDWICH:
      return {
        ...state,
        costumizePrice: action.costumizePrice,
        sandwichCostumize: {
          Name: state.sandwichCostumize.Name,
          ingredients: state.sandwichCostumize.ingredients.concat(action.ingrediente)
        },
      };
    case REMOVE_INGREDIENT_SANDWICH:
      state.sandwichCostumize.ingredients.splice(action.index, 1)
      return {
        ...state,
        costumizePrice: action.costumizePrice,
        sandwichCostumize: {
          Name: state.sandwichCostumize.Name,
          ingredients: state.sandwichCostumize.ingredients
        },
      };
    default:
      return state;
  }
}

const cart = (
  state = {
    sandwich: [],
    totalPrice: 0.0,
  }, action) => {
  switch (action.type) {
    case ADD_SANDWICH_CART:
      return {
        ...state,
        sandwich: state.sandwich.concat(action.sandwich),
        totalPrice: state.totalPrice + action.totalPrice
      };
    case REMOVE_SANDWICH_CART:
      state.sandwich.splice(action.index, 1)
      return {
        ...state,
        sandwich: state.sandwich,
        totalPrice: state.totalPrice - action.totalPrice
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  menu,
  selectSandwich,
  cart
});

export default rootReducer;
