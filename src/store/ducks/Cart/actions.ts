export function addToCartRequest(id) {
  return {
    type: "ADD_TO_CART_REQUEST",
    data: id,
  };
}
export function addToCartSuccess(product) {
  return {
    type: "ADD_TO_CART_SUCCESS",
    data: product,
  };
}
export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: "UPDATE_AMOUNT",
    id,
    amount,
  };
}
export function clearCartRequest() {
  return {
    type: "CLEAR_CART_REQUEST",
  };
}
export function clearCartResponse(product) {
  return {
    type: "CLEAR_CART",
    data: product,
  };
}
