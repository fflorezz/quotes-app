import {
  FETCH_QOD_START,
  FETCH_QOD_SUCCES,
  FETCH_QOD_FAILURE,
} from "./qod.types";

export const fetchQodStart = () => ({
  type: FETCH_QOD_START,
});

export const fetchQodSucces = (qod) => ({
  type: FETCH_QOD_SUCCES,
  payload: qod,
});

export const fetchQodFailure = (error) => ({
  type: FETCH_QOD_FAILURE,
  payload: error,
});
