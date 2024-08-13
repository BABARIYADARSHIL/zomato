import { all } from "redux-saga/effects";
import { watchLocationSaga } from "../dataSaga/Index";

export default function* rootSagaLocation() {
  yield all([watchLocationSaga()]);
}
