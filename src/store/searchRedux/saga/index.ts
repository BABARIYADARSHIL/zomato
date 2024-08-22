import { all } from "redux-saga/effects";
import { watchRestaurantData } from "../dataSaga/Index";

export default function* rootSagaRestaurantData() {
  yield all([watchRestaurantData()]);
}
