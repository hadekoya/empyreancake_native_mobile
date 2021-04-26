import * as ActionTypes from "./ActionTypes";

export const cakes = (
  state = { isLoading: true, errMess: null, cakes: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CAKES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        cakes: action.payload,
      };
    default:
      return state;
  }
};
