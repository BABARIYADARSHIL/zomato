import { all } from "redux-saga/effects";
import { watchLocationSaga } from "../dataSaga/index";

export default function* rootSagaLocation() {
  yield all([watchLocationSaga()]);
}
