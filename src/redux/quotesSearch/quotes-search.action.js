import {
  FETCH_SEARCH_QUOTES_START,
  FETCH_SEARCH_QUOTES_FAILURE,
  FETCH_SEARCH_QUOTES_SUCCES,
} from "./quotes-search.types";

export const fetchSearchQuotesStart = (searchTerm) => ({
  type: FETCH_SEARCH_QUOTES_START,
  payload: searchTerm,
});

export const fetchSearchQuotesSucces = (quotes) => ({
  type: FETCH_SEARCH_QUOTES_SUCCES,
  payload: quotes,
});

export const fetchSearchQuotesFilure = (error) => ({
  type: FETCH_SEARCH_QUOTES_FAILURE,
  payload: error,
});
