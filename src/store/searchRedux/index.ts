import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import restaurantReducer from "./reducer/index";
import rootSagaRestaurantData from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(restaurantReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagaRestaurantData);

export default store;
