import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./fav.types";
import { addQuote } from "./fav.utils";

const INITIAL_STATE = {
  quotes: [],
  quotesCount: 0,
};

const favReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        quotes: addQuote(action.payload, state.quotes),
        quotesCount: state.quotesCount + 1,
      };

    default:
      return state;
  }
};

export default favReducer;
