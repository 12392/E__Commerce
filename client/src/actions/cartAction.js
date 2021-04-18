import {
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
  REMOVE_FROM__CART_SUCCESS,
} from "./actionTypes";

export const addToCart = (id, qty) => {
  return {
    type: ADD_TO_CART,
    id,
    qty,
  };
};

export const addToCartSuccess = (productDetails) => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: productDetails,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export const removeFromCartSuccess = (productDetails) => {
  return {
    type: REMOVE_FROM__CART_SUCCESS,
    payload: productDetails,
  };
};
