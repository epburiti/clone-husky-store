import { combineReducers } from "redux";
import cart from "./Cart";
import modal from "./Modal";

const rootReducer = combineReducers({
  cart,
  modal,
});

export default rootReducer;
