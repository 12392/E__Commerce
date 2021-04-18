import {
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
  REMOVE_FROM__CART_SUCCESS,
} from "../actions/actionTypes";

const iState = {
  cartItems: [],
};

export default function cartReducer(state = iState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
      };

    case ADD_TO_CART_SUCCESS:
      const existItem = state.cartItems.find((x) => x._id === payload._id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? payload : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        };
      }

    case REMOVE_FROM_CART:

    case REMOVE_FROM__CART_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== payload),
      };
    default:
      return state;
  }
}
