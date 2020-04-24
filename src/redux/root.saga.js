import { all, call } from "redux-saga/effects";
import { qodSagas } from "./qod/qod.sagas";
import quotesSearchSagas from "./quotesSearch/quotes-search.sagas";

function* rootSaga() {
  yield all([call(qodSagas), call(quotesSearchSagas)]);
}

export default rootSaga;
