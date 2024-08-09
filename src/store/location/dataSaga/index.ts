import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_LOCATION_REQUEST } from "../../searchRedux/type/index";
import { fetchLocationFailure, fetchLocationSuccess } from "../action";
import { IpResponse, LocationResponse } from "../../../types/Location";
import {
  getIpAddress,
  getLocationInfo,
} from "../../../api/restaurant/Location";

function* fetchLocationSaga(): Generator<
  any,
  void,
  IpResponse & LocationResponse
> {
  try {
    const ipResponse: IpResponse = yield call(getIpAddress);
    const ip = ipResponse.ip;
    const locationResponse: LocationResponse = yield call(getLocationInfo, ip);
    yield put(fetchLocationSuccess(locationResponse.data));
  } catch (error: any) {
    yield put(fetchLocationFailure(error.message));
  }
}

export function* watchLocationSaga() {
  yield takeLatest(FETCH_LOCATION_REQUEST, fetchLocationSaga);
}
