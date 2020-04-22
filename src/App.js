import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/header/header.component";
import QodPage from "./pages/qod-page/qod-page.component";
import SearchPage from "./pages/search-page/search-page.component";
import FavPage from "./pages/fav-page/fave-page.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={QodPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/fav" component={FavPage} />
      </Switch>
    </div>
  );
}

export default App;
