import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      };
    case FILTER:
      state.myFavorites = state.allCharacters
      const filteredArray = state.myFavorites.filter(
        (c) => c.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredArray,
      };

    case ORDER:
      state.myFavorites = state.allCharacters
      return {
        ...state,
        myFavorites:
          action.payload === "ascendente"
            ? state.myFavorites.sort((a, b) => a.id - b.id)
            : state.myFavorites.sort((a, b) => b.id - a.id),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
