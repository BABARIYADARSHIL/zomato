import { combineReducers } from "redux";
import restaurantReducer from "../searchRedux/reducer";
import restaurantDataReducer from "../reastaurant/reducer";

const rootReducer:any = combineReducers({
  restaurantSearch: restaurantReducer,
  restaurant: restaurantDataReducer,
});
export default rootReducer;