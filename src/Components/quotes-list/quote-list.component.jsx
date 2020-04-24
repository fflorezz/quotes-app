import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectSearchedQuotes,
  selectFetched,
  selectFetching,
} from "./../../redux/quotesSearch/quotes-search.selectors";
import { addToFav } from "./../../redux/fav/fav.actions";

const QuoteList = ({
  quotesFetched,
  searchedQuotes,
  addToFav,
  quotesFetching,
}) => {
  return (
    <div>
      {quotesFetched &&
        searchedQuotes.map((quote) => (
          <div
            key={quote.id}
            style={{
              border: "solid 1px gray",
              width: "500px",
              padding: "10px",
            }}
          >
            <p>{`"${quote.body}"`}</p>
            <h5>{quote.author}</h5>
            <button
              onClick={() => {
                addToFav(quote);
              }}
            >
              Add to Fav
            </button>
          </div>
        ))}
      {quotesFetching && <div>Loading...</div>}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  searchedQuotes: selectSearchedQuotes,
  quotesFetched: selectFetched,
  quotesFetching: selectFetching,
});

const mapDispatchToProps = (dispatch) => ({
  addToFav: (quote) => dispatch(addToFav(quote)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteList);
