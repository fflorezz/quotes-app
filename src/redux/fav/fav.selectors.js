import { createSelector } from "reselect";

const selectFav = (state) => state.fav;

export const selectQuotes = createSelector([selectFav], (fav) => fav.quotes);
