import { all } from "redux-saga/effects";
import { watchRestaurant } from "../dataSaga/index";

export default function* rootSagaRestaurant() {
  yield all([watchRestaurant()]);
}
