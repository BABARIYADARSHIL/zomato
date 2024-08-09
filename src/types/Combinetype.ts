import { RestaurantState } from "./Restaurant";
import { State as SearchState } from "./SearchType";

export interface RootState {
  restaurantSearch: SearchState;
  restaurant: RestaurantState;
}
