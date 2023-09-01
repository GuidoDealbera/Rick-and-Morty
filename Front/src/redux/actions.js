import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";
import axios from "axios";

export const addFavorites = (personaje) => {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/favs/post", personaje)
        return dispatch({
          type: ADD_FAVORITE,
          payload: response.data,
        });
  };
}

export const deleteFavorites = (id) => {
  return async function (dispatch) {
    const response = await axios.delete("http://localhost:3001/favs/delete/" + id)
      return dispatch({ type: DELETE_FAVORITE, payload: response.data});
    };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};