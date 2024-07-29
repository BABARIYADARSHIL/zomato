import { RestaurantData } from "../../../api/restaurant/Restaurants";
import {
  FETCH_RESTAURANT_DATA
} from "../../searchRedux/type/index";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchRestaurantFailure, fetchRestaurantSuccess } from "../action";

// interface Restaurant {
//   id: string;
//   name: string;
//   // other restaurant properties
// }

// interface FetchRestaurantDataAction {
//   type: typeof FETCH_RESTAURANT_DATA;
//   payload?: any;
// }
export function* restaurant(action: any): any {
  try {
    const restaurant: any = yield call(RestaurantData, action.payload);
    yield put(fetchRestaurantSuccess(restaurant.data));
  } catch (e: any) {
    yield put(fetchRestaurantFailure(e.message));
  }
}

export function* watchRestaurant() {
  yield takeEvery(FETCH_RESTAURANT_DATA, restaurant);
}
