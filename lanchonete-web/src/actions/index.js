import api from '../util/api'
import {
    SET_DATA, SELECT_SANDWICH, CLOSE_CUSTOMIZE_SANDWICH, CUSTOMIZE_SANDWICH, ADD_INGREDIENT_SANDWICH, REMOVE_INGREDIENT_SANDWICH,
    ADD_SANDWICH_CART, REMOVE_SANDWICH_CART
} from "../constants/action-types";

export const getData = data => (dispatch) => {
    dispatch(
        {
            type: SET_DATA,
            sandwich: data.sandwich,
            ingrediente: data.ingrediente
        }
    )
};

export const fetchData = () => async (dispatch) => {
    try {
        const response = await api.get("/getData");
        return dispatch(getData(response.data));
    } catch (error) {
        console.log(error);
    }
}

export const selectSandwich = sandwich => (dispatch) => {
    dispatch(
        {
            type: SELECT_SANDWICH,
            sandwich: sandwich
        }
    )
};

export const sandwichCostumize = (sandwich, costumizePrice) => (dispatch) => {
    dispatch(
        {
            type: CUSTOMIZE_SANDWICH,
            sandwichCostumize: sandwich,
            costumizePrice: costumizePrice
        }
    )
};

export const closeSandwichCostumize = () => (dispatch) => {
    dispatch(
        {
            type: CLOSE_CUSTOMIZE_SANDWICH
        }
    )
};

export const addIngrediente = (ingrediente, costumizePrice) => (dispatch) => {
    dispatch({
        type: ADD_INGREDIENT_SANDWICH,
        ingrediente,
        costumizePrice
    })
};

export const removeIngrediente = (index, costumizePrice) => (dispatch) => {
    dispatch({
        type: REMOVE_INGREDIENT_SANDWICH,
        index,
        costumizePrice
    })
};

export const addSandwichCart = (sandwich, totalPrice) => (dispatch) => {
    dispatch({
        type: ADD_SANDWICH_CART,
        sandwich,
        totalPrice
    })
};

export const removeSandwichCart = (index, totalPrice) => (dispatch) => {
    dispatch({
        type: REMOVE_SANDWICH_CART,
        index,
        totalPrice
    })
};