import { takeLatest, call, put, all } from "redux-saga/effects";
import Axios from "axios";
import { FETCH_SEARCH_QUOTES_START } from "./quotes-search.types";
import {
  fetchSearchQuotesSucces,
  fetchSearchQuotesFilure,
} from "./quotes-search.action";

function* fetchSearchQuotesAsync(action) {
  try {
    const response = yield Axios.get("https://favqs.com/api/quotes/?", {
      params: {
        filter: action.payload,
      },
      headers: {
        Authorization: "Token token=00ad73b56abbd232c614f4368f3eeb91",
      },
    });

    yield put(fetchSearchQuotesSucces(response.data.quotes));
  } catch (error) {
    yield put(fetchSearchQuotesFilure(error));
  }
}

function* fetchSearchQuotesStart() {
  yield takeLatest(FETCH_SEARCH_QUOTES_START, fetchSearchQuotesAsync);
}

function* quotesSearchSagas() {
  yield all([call(fetchSearchQuotesStart)]);
}

export default quotesSearchSagas;
