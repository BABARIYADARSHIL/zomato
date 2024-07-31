import {
  DATA_FETCHED_FAIL,
  DATA_FETCHED_SUCESS,
  DATA_FETCHING,
} from "../type/index";
import { Suggestion } from "../../../types/SearchType";

export const datafetching = (searchTerm: string) => {
  return {
    type: DATA_FETCHING,
    payload: { searchTerm },
  };
};
export const datafetchingSuccess = (restaurants: Suggestion[]) => {
  return {
    type: DATA_FETCHED_SUCESS,
    payload: { restaurants },
  };
};
export const datafetchingFail = (error: string) => {
  return {
    type: DATA_FETCHED_FAIL,
    payload: { error },
  };
};
