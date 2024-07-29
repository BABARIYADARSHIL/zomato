import { all, fork } from "redux-saga/effects";
import rootSagaRestaurantData from "../searchRedux/saga/index";
import rootSagaRestaurant from "../reastaurant/saga/index";

export function* rootSaga() {
  yield all([
    fork(rootSagaRestaurantData), 
    fork(rootSagaRestaurant)]);
}
