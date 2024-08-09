import { DATA_FETCHED_FAIL, DATA_FETCHED_SUCESS, DATA_FETCHING } from "../type";
import { State, initialState } from "../../../types/SearchType";
import { RestaurantActionTypes  } from "../../../types/Restaurant";

const restaurantReducer = (
  state = initialState,
  action: RestaurantActionTypes): State => {
  switch (action.type) {
    case DATA_FETCHING:
      return { ...state, loading: true, error: null };
    case DATA_FETCHED_SUCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
        error: null,
      };
    case DATA_FETCHED_FAIL:
      return {
        ...state,
        loading: false,
        restaurants: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default restaurantReducer;
