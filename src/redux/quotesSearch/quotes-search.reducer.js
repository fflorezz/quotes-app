import {
  FETCH_SEARCH_QUOTES_START,
  FETCH_SEARCH_QUOTES_FAILURE,
  FETCH_SEARCH_QUOTES_SUCCES,
} from "./quotes-search.types";

const INITIAL_STATE = {
  searchedQuotes: [],
  errorMessage: null,
  fetched: false,
  fetching: false,
};

const quotesSearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_QUOTES_START:
      return {
        ...state,
        fetched: false,
        fetching: true,
      };
    case FETCH_SEARCH_QUOTES_SUCCES:
      return {
        ...state,
        searchedQuotes: action.payload,
        errorMessage: null,
        fetched: true,
        fetching: false,
      };
    case FETCH_SEARCH_QUOTES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        fetched: false,
        fetching: false,
      };
    default:
      return state;
  }
};

export default quotesSearchReducer;
