import { DATA_FETCHED_FAIL, DATA_FETCHED_SUCESS, DATA_FETCHING } from "../type";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const restaurantReducer = (state = initialState, action: any) => {
  console.log("state", state);
  console.log("action", action);

  switch (action.type) {
    case DATA_FETCHING:
      return { ...state, loading: true, error: null };
    case DATA_FETCHED_SUCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case DATA_FETCHED_FAIL:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
export default restaurantReducer;
