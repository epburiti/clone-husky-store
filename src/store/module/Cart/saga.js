import itens from "../../../Assets/itens";
import { put, all, takeLatest } from "redux-saga/effects";
import { addToCartSuccess } from "./actions";
function* addToCart(id) {
  const response = itens.find((element) => element.id === id.data);
  console.log("response: ", response)
  yield put(addToCartSuccess(response));
}
export default all([takeLatest(`ADD_TO_CART_REQUEST`, addToCart),]);
