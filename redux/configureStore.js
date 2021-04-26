import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { features } from "./features";
import { cakes } from "./cakes";
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      features,
      cakes,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
