import { call, put, takeEvery } from "redux-saga/effects";
import { RestaurantData } from "../../../api/restaurant/RestaurantData";
import { DATA_FETCHING } from "../type/index";
import { datafetchingFail, datafetchingSuccess } from "../action";

interface ResponseData {
  data: any;
}

export function* restaurantData(action: any): any {
  try {
    const response: ResponseData = yield call(RestaurantData, {
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
