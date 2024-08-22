import { RestaurantData } from "../../../api/restaurant/Restaurants";
import {
  FETCH_RESTAURANT_DATA
} from "../../searchRedux/type/index";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchRestaurantData, fetchRestaurantFailure, fetchRestaurantSuccess } from "../action/Index";
import { Suggestion } from "../../../types/SearchType";
import { AxiosResponse } from "axios";


export function* restaurant(action: ReturnType<typeof fetchRestaurantData>) {
  try {
    const respones: AxiosResponse<Suggestion[]> = yield call(RestaurantData) 
    yield put(fetchRestaurantSuccess(respones.data));
  } catch (e: any) {
    yield put(fetchRestaurantFailure(e.message));
  }
}

export function* watchRestaurant() {
  yield takeEvery(FETCH_RESTAURANT_DATA, restaurant);
}
