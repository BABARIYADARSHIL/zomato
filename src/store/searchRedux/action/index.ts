import {
  DATA_FETCHED_FAIL,
  DATA_FETCHED_SUCESS,
  DATA_FETCHING,
} from "../type/index";
export const datafetching = (searchTerm:any) => {
  return {
    type: DATA_FETCHING,
    payload: { searchTerm },
  };
};
export const datafetchingSuccess = (restaurants: any) => {
  return {
    type: DATA_FETCHED_SUCESS,
    payload: { restaurants },
  };
};
export const datafetchingFail = (error: any) => {
  return {
    type: DATA_FETCHED_FAIL,
    payload: {error},
  };
};
