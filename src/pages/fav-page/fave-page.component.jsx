import React from "react";
import { selectQuotes } from "./../../redux/fav/fav.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const FavPage = ({ quotes }) => {
  console.log(quotes);
  return (
    <div>
      <h1>FAV</h1>
      {quotes.map((quote) => (
        <div
          style={{ border: "solid 1px gray", width: "500px", padding: "10px" }}
        >
          <p>{quote.body}</p>
          <h5>{quote.author}</h5>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

const mapStateProps = createStructuredSelector({
  quotes: selectQuotes,
});

export default connect(mapStateProps)(FavPage);
