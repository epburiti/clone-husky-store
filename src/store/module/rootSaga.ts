import { all } from "redux-saga/effects";

import cart from "./Cart/saga.js";

export default function* rootSaga() {
  return yield all([cart]);
}
