export interface Suggestion {
  id: number;
  categories: string[];
  foodType: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  restaurantName: string;
  items: Item[];
  location: string;
  rating: number;
}
export interface Item {
  id: number;
  name: string;
  price: number;
}

export interface State {
  restaurants: Suggestion[];
  loading: boolean;
  error: string | null;
}

export interface restaurantReducer {
  restaurants: Suggestion[];
  loading: boolean;
  error: string | null;
}
export interface RestaurantsData {
  restaurants: Suggestion[];
}
export interface RestaurantSearch {
  restaurantSearch: {
    restaurants: RestaurantsData;
    error: null | string;
    loading: boolean;
  };
}

export interface SearchSuggestionsComponentProps {
  suggestions: Suggestion[];
}

export interface ResponseData {
  data: Suggestion[];
}
export const initialState: State = {
  restaurants: [],
  loading: false,
  error: null,
};
