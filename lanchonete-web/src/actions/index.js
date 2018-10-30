import { SET_DATA, SELECT_SANDWICH, CLOSE_CUSTOMIZE_SANDWICH, CUSTOMIZE_SANDWICH, ADD_INGREDIENT_SANDWICH, REMOVE_INGREDIENT_SANDWICH } from "../constants/action-types";
import api from '../util/api'

export const getData = data => (dispatch, getState) => {
    dispatch(
        {
            type: SET_DATA,
            sandwich: data.sandwich,
            ingrediente: data.ingrediente
        }
    )
};

export const fetchData = () => async (dispatch, getState) => {
    try {
        const response = await api.get("/getData");
        return dispatch(getData(response.data));
    } catch (error) {
        console.log(error);
    }
}

export const selectSandwich = sandwich => (dispatch, getState) => {
    dispatch(
        {
            type: SELECT_SANDWICH,
            sandwich: sandwich
        }
    )
};

export const sandwichCostumize = sandwich => (dispatch, getState) => {
    dispatch(
        {
            type: CUSTOMIZE_SANDWICH,
            sandwichCostumize: sandwich
        }
    )
};

export const closeSandwichCostumize = () => (dispatch, getState) => {
    dispatch(
        {
            type: CLOSE_CUSTOMIZE_SANDWICH
        }
    )
};

export const addIngrediente = ingrediente => (dispatch, getState) => {
    dispatch({
        type: ADD_INGREDIENT_SANDWICH,
        ingrediente,
    })
};

export const removeIngrediente = index => (dispatch, getState) => {
    dispatch({
        type: REMOVE_INGREDIENT_SANDWICH,
        index,
    })
};