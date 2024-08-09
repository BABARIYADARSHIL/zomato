import { call, put, takeEvery } from "redux-saga/effects";
import { RestaurantSearch } from "../../../api/restaurant/RestaurantSearch";
import { DATA_FETCHING } from "../type/index";
import { datafetching, datafetchingFail, datafetchingSuccess } from "../action";
import { ResponseData } from "../../../types/SearchType";

export function* restaurantData(action: ReturnType<typeof datafetching>) {
  try {
    const response: ResponseData = yield call(RestaurantSearch, {
      search: action.payload.searchTerm,
    });
    yield put(datafetchingSuccess(response.data));
  } catch (e: any) {
    yield put(datafetchingFail(e.message));
  }
}

export function* watchRestaurantData() {
  yield takeEvery(DATA_FETCHING, restaurantData);
}
