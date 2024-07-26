import { all } from "redux-saga/effects";
import { watchRestaurantData } from "../dataSaga/index";

export default function* rootSagaRestaurantData() {
  yield all([watchRestaurantData()]);
}
