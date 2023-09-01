import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";
import axios from "axios";

export const addFavorite = (character) => {
  return async function (dispatch) {
    try {
      await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(character),
        }
      );
      dispatch({ type: ADD_FAVORITE, payload: character });
    } catch (error) {
        alert('NO SE PUDO AGREGAR FAVORITO')
    }

    // return {
    //     type: ADD_FAVORITE,
    //     payload: character,
    // }
  };
};
export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
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
