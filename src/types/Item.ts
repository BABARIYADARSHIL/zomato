import { Suggestion } from "./SearchType";

export interface RootState {
  restaurant: {
    restaurants: Suggestion[];
    Restaurant: Suggestion[] | null;
    loading: boolean;
    error: string | null;
  };
}
