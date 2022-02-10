import { userActionConstants } from "./actionTypes";

export const userDetailsDataInitiate = () => ({
  type: userActionConstants.USERS_DETAILS_DATA_INITIATE,
});

export const userDetailsDataSuccess = (data) => ({
  type: userActionConstants.USERS_DETAILS_DATA_SUCCESS,
  payload: data,
});

export const userDetailsDataFailure = (error) => ({
  type: userActionConstants.USERS_DETAILS_DATA_FAILURE,
  payload: error,
});
