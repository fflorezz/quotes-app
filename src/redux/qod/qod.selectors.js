import { createSelector } from "reselect";

const selectQod = (state) => state.qod;

export const selectQuote = createSelector([selectQod], (qod) => qod.quote);

export const selectQodFetched = createSelector(
  [selectQod],
  (qod) => qod.fetched
);

export const selectQodFetching = createSelector(
  [selectQod],
  (qod) => qod.fetching
);
