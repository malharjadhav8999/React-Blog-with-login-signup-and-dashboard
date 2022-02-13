import { userActionConstants } from "./actionTypes";

export const postInitiate = () => ({
  type: userActionConstants.POST_INITIATE,
});

export const postSuccess = (data) => ({
  type: userActionConstants.POST_SUCCESS,
  payload: data,
});

export const postFailure = (error) => ({
  type: userActionConstants.POST_FAILURE,
  payload: error,
});
