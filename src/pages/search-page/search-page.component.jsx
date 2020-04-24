import React, { useEffect } from "react";
import SearchBar from "./../../Components/search-bar/search-bar.component";
import QuoteList from "./../../Components/quotes-list/quote-list.component";
import { connect } from "react-redux";
import { fetchSearchQuotesSucces } from "../../redux/quotesSearch/quotes-search.action";

const SearchPage = ({ fetchSearchQuotesSucces }) => {
  useEffect(() => {
    fetchSearchQuotesSucces([]);
  }, [fetchSearchQuotesSucces]);
  return (
    <div>
      <h1>SEARCH</h1>
      <SearchBar />
      <QuoteList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchSearchQuotesSucces: (payload) =>
    dispatch(fetchSearchQuotesSucces(payload)),
});

export default connect(null, mapDispatchToProps)(SearchPage);
