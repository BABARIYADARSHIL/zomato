import { DATA_FETCHED_FAIL, DATA_FETCHED_SUCESS, DATA_FETCHING } from "../type";

interface RestaurantItem {
  id: number;
  restaurantName: string;
  image: string;
  foodType: string;
  location: string;
  categories: string[];
  items: { name: string; price: string }[];
  rating: string;
}

interface State {
  restaurants: RestaurantItem[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  restaurants: [],
  loading: false,
  error: null,
};



const restaurantReducer = (state = initialState, action: any):any => {
  console.log("state", state);
  console.log("action", action);

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
