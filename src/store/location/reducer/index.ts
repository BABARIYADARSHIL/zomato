import { LocationState } from "../../../types/Location";
import {
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_FAILURE,
} from "../../searchRedux/type/index";

const initialState: LocationState = {
  location: null,
  loading: false,
  error: null,
};

const locationReducer = (state = initialState, action: any): LocationState => {
  switch (action.type) {
    case FETCH_LOCATION_REQUEST:
      return { ...state, loading: true };
    case FETCH_LOCATION_SUCCESS:
      return { ...state, loading: false, location: action.payload };
    case FETCH_LOCATION_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default locationReducer;
