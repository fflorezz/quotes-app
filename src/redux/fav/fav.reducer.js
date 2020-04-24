import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./fav.types";
import { addQuote, removeQuote } from "./fav.utils";

const INITIAL_STATE = {
  quotes: [],
};

const favReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        quotes: addQuote(action.payload, state.quotes),
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        quotes: removeQuote(action.payload, state.quotes),
      };

    default:
      return state;
  }
};

export default favReducer;
