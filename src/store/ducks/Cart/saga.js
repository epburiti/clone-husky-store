import itens from "../../../Assets/itens";
import { put, all, takeLatest } from "redux-saga/effects";
import { addToCartSuccess, clearCartResponse } from "./actions";
function* addToCart(id) {
  const response = itens.find((element) => element.id === id.data);
  yield put(addToCartSuccess(response));
}
function* clearAllCart() {
  const response = [];
  yield put(clearCartResponse(response));
}
export default all([takeLatest(`ADD_TO_CART_REQUEST`, addToCart), takeLatest('CLEAR_CART_REQUEST', clearAllCart)]);
