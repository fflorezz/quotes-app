import { createSelector } from "reselect";

const selectQuotesSearch = (state) => state.quotesSearch;

export const selectSearchedQuotes = createSelector(
  [selectQuotesSearch],
  (quotesSearch) => quotesSearch.searchedQuotes
);

export const selectFetched = createSelector(
  [selectQuotesSearch],
  (quotesSearch) => quotesSearch.fetched
);

export const selectFetching = createSelector(
  [selectQuotesSearch],
  (quotesSearch) => quotesSearch.fetching
);
