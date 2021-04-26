import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { features } from "./features";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      features,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
