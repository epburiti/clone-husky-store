import produce from "immer";

const INITIAL_STATE = false;

export default function Modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return produce(state, (draft) => !draft);
    default:
      return state;
  }
}
