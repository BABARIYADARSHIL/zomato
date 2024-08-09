import { createSelector } from "reselect";
import { RestaurantSearch } from "../types/SearchType";


export const selectRestaurantData = createSelector(
  (state: RestaurantSearch) => state.restaurantSearch,
  (restaurantSearch) => ({
    restaurants: restaurantSearch.restaurants.restaurants || [],
    error: restaurantSearch.error,
    loading: restaurantSearch.loading,
  })
);
