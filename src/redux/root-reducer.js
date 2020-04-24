import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import qodReducer from "./qod/qod.reducer";
import favReducer from "./fav/fav.reducer";
import quotesSearchReducer from "./quotesSearch/quotes-search.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["fav"],
};

const rootReducer = combineReducers({
  qod: qodReducer,
  fav: favReducer,
  quotesSearch: quotesSearchReducer,
});

export default persistReducer(persistConfig, rootReducer);
