import { SET_DATA } from "../constants/action-types";
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