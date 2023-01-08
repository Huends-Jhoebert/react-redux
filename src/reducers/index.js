import counterReducer from "./counter";
import isLoginReducer from "./isLogin";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export default allReducers;
