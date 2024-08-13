import { all, fork } from "redux-saga/effects";
import rootSagaRestaurantData from "../searchRedux/saga/Index";
import rootSagaRestaurant from "../reastaurant/saga/Index";
import rootSagaLocation from "../location/saga/Index";

export function* rootSaga() {
  yield all([
    fork(rootSagaRestaurantData),
    fork(rootSagaRestaurant),
    fork(rootSagaLocation),
  ]);
}
