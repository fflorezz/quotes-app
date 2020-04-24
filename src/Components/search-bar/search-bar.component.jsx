import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSearchQuotesStart } from "./../../redux/quotesSearch/quotes-search.action";

const SearchBar = ({ fetchSearchQuotesStart }) => {
  const [quotesSearch, setQuotesSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchSearchQuotesStart(quotesSearch);

    setQuotesSearch("");
  };

  const handleOnChange = (e) => {
    setQuotesSearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleOnChange}
          value={quotesSearch}
          placeholder="Search for a Quote"
        />
        <button>SEARCH</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchSearchQuotesStart: (searchTerm) =>
    dispatch(fetchSearchQuotesStart(searchTerm)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
