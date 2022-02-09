import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import userDetailsReducer from "./userDetails/userDetailsReducer";

export default combineReducers({
  userReducer,
  userDetailsReducer,
});
