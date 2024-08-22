import { combineReducers } from "redux";
import restaurantReducer from "../searchRedux/reducer/Index";
import restaurantDataReducer from "../reastaurant/reducer/Index";
import locationReducer from "../location/reducer/Index";

const rootReducer = combineReducers<any>({
  restaurantSearch: restaurantReducer,
  restaurant: restaurantDataReducer,
  locationReducer: locationReducer,
});
export default rootReducer;
