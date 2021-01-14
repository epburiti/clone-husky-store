import produce from "immer";

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "ADD_TO_CART_SUCCESS":
      return produce(state, (draft: any) => {
        const productIndex = draft.findIndex((p) => p.id === action.data.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.data, amount: 1 });
        }

        console.log(state);
      });

    case "REMOVE_FROM_CART": {
      return produce(state, (draft: any) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
      console.log(state);
    }
    case "UPDATE_AMOUNT": {
      return produce(state, (draft: any) => {
        console.log(action);
        const productIndex = draft.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = action.amount;
        }
        console.log(state);
      });
    }
    default:
      return state;
  }
}
