import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return produce(state, draft => {

            });

        case 'UPDATE_AMOUNT': {
            console.log(action, ' action');
            return[...state,action.product];
        }
        default:
            return state;
    }
}