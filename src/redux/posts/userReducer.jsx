import { userActionConstants } from "./actionTypes";

const initialState = {
  loader: false,
  userData: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionConstants.POST_INITIATE:
    return {
      ...state,
      loader: true,
      };

    case userActionConstants.POST_SUCCESS:
      return {
        ...state,
        loader: false,
        userData: payload,
      };

    case userActionConstants.POST_FAILURE:
      return {
        ...state,
        loader: false,
        error: payload,
      };

    default: {
      return state;
    }
  }
};

export default userReducer;
