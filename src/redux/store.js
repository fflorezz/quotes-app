import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root.saga";

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
