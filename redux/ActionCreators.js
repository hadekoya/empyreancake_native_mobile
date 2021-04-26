import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchFeatures = () => (dispatch) => {
  return fetch(baseUrl + "features")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((features) => dispatch(addFeatures(features)))
    .catch((error) => dispatch(featuresFailed(error.message)));
};

export const featuresFailed = (errMess) => ({
  type: ActionTypes.FEATURES_FAILED,
  payload: errMess,
});

export const addFeatures = (features) => ({
  type: ActionTypes.ADD_FEATURES,
  payload: features,
});


export const fetchCakes = () => (dispatch) => {
  return fetch(baseUrl + "cakes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((cakes) => dispatch(addCakes(cakes)))
    .catch((error) => dispatch(cakesFailed(error.message)));
};

export const cakesFailed = (errMess) => ({
  type: ActionTypes.CAKES_FAILED,
  payload: errMess,
});

export const addCakes = (cakes) => ({
  type: ActionTypes.ADD_CAKES,
  payload: cakes,
});

