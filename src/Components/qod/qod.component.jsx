import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectQuote, selectQodFetched } from "./../../redux/qod/qod.selectors";
import { createStructuredSelector } from "reselect";
import { fetchQodStart } from "./../../redux/qod/qod.actions";
import { addToFav } from "./../../redux/fav/fav.actions";

const Qod = ({ quote, fetchQodStart, quoteFetched, addToFav }) => {
  useEffect(() => {
    fetchQodStart();
  }, [fetchQodStart]);

  return (
    <div>
      {quoteFetched ? (
        <div
          style={{ border: "solid 1px gray", width: "500px", padding: "10px" }}
        >
          <p>{quote.body}</p>
          <h5>{quote.author}</h5>
          <button
            onClick={() => {
              addToFav(quote);
            }}
          >
            Add to Fav
          </button>
          <button
            onClick={() => {
              fetchQodStart();
            }}
          >
            Reload
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const mapStateProps = createStructuredSelector({
  quote: selectQuote,
  quoteFetched: selectQodFetched,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQodStart: () => dispatch(fetchQodStart()),
  addToFav: (quote) => dispatch(addToFav(quote)),
});
export default connect(mapStateProps, mapDispatchToProps)(Qod);
