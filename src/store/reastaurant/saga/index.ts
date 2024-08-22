import { all } from "redux-saga/effects";
import { watchRestaurant } from "../dataSaga/Index";

export default function* rootSagaRestaurant() {
  yield all([watchRestaurant()]);
}
