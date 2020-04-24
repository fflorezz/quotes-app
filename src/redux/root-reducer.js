import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import qodReducer from "./qod/qod.reducer";
import favReducer from "./fav/fav.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({ qod: qodReducer, fav: favReducer });

export default persistReducer(persistConfig, rootReducer);
