import { DATA_FETCHED_FAIL, DATA_FETCHED_SUCESS, DATA_FETCHING, FETCH_RESTAURANT_DATA, FETCH_RESTAURANT_DATA_FAILED, FETCH_RESTAURANT_DATA_SUCCESS, FILTER_ALL, FILTER_RATING, FILTER_VEG } from "../store/searchRedux/type";
import { Suggestion } from "./SearchType";

interface DataFetchingAction {
  type: typeof DATA_FETCHING;
}

interface DataFetchedSuccessAction {
  type: typeof DATA_FETCHED_SUCESS;
  payload: Suggestion[];
}

interface DataFetchedFailAction {
  type: typeof DATA_FETCHED_FAIL;
  payload: string;
}

interface FetchRestaurantDataAction {
  type: typeof FETCH_RESTAURANT_DATA;
}

interface FetchRestaurantDataSuccessAction {
  type: typeof FETCH_RESTAURANT_DATA_SUCCESS;
  payload: Suggestion[];
}

interface FetchRestaurantDataFailedAction {
  type: typeof FETCH_RESTAURANT_DATA_FAILED;
  payload: string;
}

interface FilterAllAction {
  type: typeof FILTER_ALL;
}

interface FilterRatingAction {
  type: typeof FILTER_RATING;
}

interface FilterVegAction {
  type: typeof FILTER_VEG;
}

export interface RestaurantState {
  loading: boolean;
  Restaurant: Suggestion[];
  FilteredData: Suggestion[];
  error: string | null;
}
export interface State {
  restaurants: Suggestion[];
  loading: boolean;
  error: string | null;
}
export interface restaurantsdata {
  restaurants: Suggestion[];
}
export interface RootState {
  restaurantSearch: {
    restaurants: restaurantsdata;
    error: string | null;
    loading: boolean;
  };
}
export interface SearchSuggestionsComponentProps {
  suggestions: Suggestion[];
}

export const initialState: RestaurantState = {
  Restaurant: [],
  FilteredData: [],
  loading: false,
  error: null,
};

export interface RestaurantStates {
  FilteredData: Suggestion[];
  loading: boolean;
  error: { message: string } | null;
}


export type RestaurantActionTypes =
  | DataFetchingAction
  | DataFetchedSuccessAction
  | DataFetchedFailAction
  | FetchRestaurantDataAction
  | FetchRestaurantDataSuccessAction
  | FetchRestaurantDataFailedAction
  | FilterAllAction
  | FilterRatingAction
  | FilterVegAction;
