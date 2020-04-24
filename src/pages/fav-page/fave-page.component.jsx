import React from "react";
import { selectQuotes } from "./../../redux/fav/fav.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { removeFromFav } from "../../redux/fav/fav.actions";

const FavPage = ({ quotes, removeQuote }) => {
  return (
    <div>
      <h1>FAV</h1>
      {quotes.map((quote) => (
        <div
          key={quote.id}
          style={{ border: "solid 1px gray", width: "500px", padding: "10px" }}
        >
          <p>{`"${quote.body}"`}</p>
          <h5>{quote.author}</h5>
          <button onClick={() => removeQuote(quote.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

const mapStateProps = createStructuredSelector({
  quotes: selectQuotes,
});

const mapDispatchToProps = (dispatch) => ({
  removeQuote: (quoteId) => dispatch(removeFromFav(quoteId)),
});
export default connect(mapStateProps, mapDispatchToProps)(FavPage);
