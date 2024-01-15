import { combineReducers } from "redux";
import userReducer from "./userReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducers,
  user: userReducer,
});

export default rootReducer;
