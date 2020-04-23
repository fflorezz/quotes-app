import { all, call } from "redux-saga/effects";
import { qodSagas } from "./qod/qod.sagas";

function* rootSaga() {
  yield all([call(qodSagas)]);
}

export default rootSaga;
