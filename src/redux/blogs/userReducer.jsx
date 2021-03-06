import { userActionConstants } from "./actionTypes";

const initialState = {
  loader: false,
  userData: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionConstants.BLOGS_INITIATE:
      return {
        ...state,
        loader: true,
      };

    case userActionConstants.BLOGS_SUCCESS:
      return {
        ...state,
        loader: false,
        userData: payload,
      };

    case userActionConstants.BLOGS_FAILURE:
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
