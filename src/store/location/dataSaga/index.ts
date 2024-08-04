import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { FETCH_LOCATION_REQUEST } from "../../searchRedux/type/index";
import { fetchLocationFailure, fetchLocationSuccess } from "../action";
import { IpResponse, LocationResponse } from "../../../types/Location";

function* fetchLocationSaga(): Generator<
  any,
  void,
  IpResponse & LocationResponse
> {
  try {
    const ipResponse: IpResponse = yield call(
      axios.get,
      "https://api.ipify.org?format=json"
    );
    const ip = ipResponse.data.ip;
    const locationResponse: LocationResponse = yield call(
      axios.get,
      `https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`,
      {
        headers: {
          "x-rapidapi-key":
            "9fe6f7f5e4mshf7d9c902352b3e7p1077e3jsn69d80b60b74d",
          "x-rapidapi-host":
            "ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com",
          "x-rapidapi-ua": "RapidAPI-Playground",
          "Content-Type": "application/json",
        },
      }
    );

    yield put(fetchLocationSuccess(locationResponse.data));
  } catch (error: any) {
    yield put(fetchLocationFailure(error.message));
  }
}

export function* watchLocationSaga() {
  yield takeLatest(FETCH_LOCATION_REQUEST, fetchLocationSaga);
}
