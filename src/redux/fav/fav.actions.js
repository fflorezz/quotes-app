import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./fav.types";

export const addToFav = (quote) => ({
  type: ADD_TO_FAV,
  payload: quote,
});

export const removeFromFav = (quoteId) => ({
  type: REMOVE_FROM_FAV,
  payload: quoteId,
});
