import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">QOD</Link>
        </li>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
        <li>
          <Link to="/fav">FAV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
