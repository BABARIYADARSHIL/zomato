import { combineReducers } from "redux";
import restaurantReducer from "../searchRedux/reducer";
import restaurantDataReducer from "../reastaurant/reducer";
import locationReducer from "../location/reducer";

const rootReducer = combineReducers<any>({
  restaurantSearch: restaurantReducer,
  restaurant: restaurantDataReducer,
  locationReducer: locationReducer,
});
export default rootReducer;
