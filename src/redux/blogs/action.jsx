import { userActionConstants } from "./actionTypes";

export const blogsInitiate = () => ({
  type: userActionConstants.BLOGS_INITIATE,
});

export const blogsSuccess = (data) => ({
  type: userActionConstants.BLOGS_SUCCESS,
  payload: data,
});

export const blogsFailure = (error) => ({
  type: userActionConstants.BLOGS_FAILURE,
  payload: error,
});
