import { mainActions } from "./Actions";

export function RequestMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.asyncPetition) {
        dispatch(mainActions.setRequesting());
        return next(action);
      }
      return next(action);
    }
  }
}
