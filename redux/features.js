import * as ActionTypes from "./ActionTypes";

export const features = (
  state = { isLoading: true, errMess: null, features: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FEATURES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        features: action.payload,
      };
    default:
      return state;
  }
};
