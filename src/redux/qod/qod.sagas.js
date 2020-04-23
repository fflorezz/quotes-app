import { takeLatest, call, put, all } from "redux-saga/effects";
import Axios from "axios";

import { fetchQodSucces, fetchQodFailure } from "./qod.actions";
import { FETCH_QOD_START } from "./qod.types";

function* fetchQodAsync() {
  try {
    const response = yield Axios.get("https://favqs.com/api/qotd");
    const quote = response.data.quote;
    const { id, body, author } = quote;
    yield put(fetchQodSucces({ id, body, author }));
  } catch (error) {
    yield put(fetchQodFailure(error));
  }
}

function* fetchQodStart() {
  yield takeLatest(FETCH_QOD_START, fetchQodAsync);
}

export function* qodSagas() {
  yield all([call(fetchQodStart)]);
}
