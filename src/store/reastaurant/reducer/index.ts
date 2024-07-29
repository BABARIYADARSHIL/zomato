import {
  FETCH_RESTAURANT_DATA,
  FETCH_RESTAURANT_DATA_SUCCESS,
  FETCH_RESTAURANT_DATA_FAILED,
  FILTER_ALL,
  FILTER_RATING,
  FILTER_VEG,
} from "../../../store/searchRedux/type/index";

interface RestaurantState {
  loading: boolean;
  Restaurant: any[];
  FilteredData: any[];
  error: string | null;
}

const initialState: RestaurantState = {
  Restaurant: [],
  FilteredData: [],
  loading: false,
  error: null,
};

const restaurantDataReducer = (
  state = initialState,
  action: any
): RestaurantState => {
  switch (action.type) {
    case FETCH_RESTAURANT_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RESTAURANT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        Restaurant: action.payload,
        FilteredData: action.payload,
        error: null,
      };
    case FETCH_RESTAURANT_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        Restaurant: [],
        FilteredData: [],
      };
    case FILTER_ALL:
      return {
        ...state,
        FilteredData: state.Restaurant,
      };
    case FILTER_RATING:
      return {
        ...state,
        FilteredData: [...state.Restaurant].sort((a, b) => b.rating - a.rating),
      };
    case FILTER_VEG:
      return {
        ...state,
        FilteredData: state.Restaurant.filter(
          (item: any) => item.foodType === "Veg"
        ),
      };

    default:
      return state;
  }
};
export default restaurantDataReducer;
