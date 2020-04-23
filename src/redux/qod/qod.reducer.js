import {
  FETCH_QOD_START,
  FETCH_QOD_FAILURE,
  FETCH_QOD_SUCCES,
} from "./qod.types";

const INITIAL_STATE = {
  quote: null,
  errorMessage: null,
  fetching: false,
  fetched: false,
};

const qodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QOD_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_QOD_SUCCES:
      return {
        ...state,
        quote: action.payload,
        errorMessage: undefined,
        fetching: false,
        fetched: true,
      };
    case FETCH_QOD_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        fetching: false,
        fetched: false,
      };
    default:
      return state;
  }
};

export default qodReducer;
