import { userActionConstants } from "./actionTypes";

const initialState = {
  loader: false,
  userData: {},
  error: "",
};

const userDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userActionConstants.USERS_DETAILS_DATA_INITIATE:
      return {
        ...state,
        loader: true,
      };

    case userActionConstants.USERS_DETAILS_DATA_SUCCESS:
      return {
        ...state,
        loader: false,
        userData: payload,
      };

    case userActionConstants.USERS_DETAILS_DATA_FAILURE:
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

export default userDetailsReducer;
