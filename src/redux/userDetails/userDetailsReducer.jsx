import { userActionConstants } from "./actionTypes";

const initialState = {
  // loader: ,

  // error: "",
};

const userDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userActionConstants.XYZ:
      return {
        ...state,
        // loader: false,
        // error: payload,
      };

    default: {
      return state;
    }
  }
};

export default userDetailsReducer;
