import {
  FETCH_LOCATION_FAILURE,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from "../../searchRedux/type";

export const fetchLocation = () => ({
  type: FETCH_LOCATION_REQUEST,
});

export const fetchLocationSuccess = (locationData: any) => ({
  type: FETCH_LOCATION_SUCCESS,
  payload: locationData,
});

export const fetchLocationFailure = (error: string) => ({
  type: FETCH_LOCATION_FAILURE,
  payload: error,
});
