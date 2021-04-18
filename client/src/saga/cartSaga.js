import { put, select } from "redux-saga/effects";
import axios from "axios";
import { addToCartSuccess, removeFromCartSuccess } from "../actions/cartAction";

export function* addToCartSaga(action) {
  const { data } = yield axios.get(`/api/products/${action.id}`);
  const UData = {
    ...data,
    qty: action.qty,
  };
  yield put(addToCartSuccess(UData));
  const state = yield select();
  yield localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
}

export function* removeFromCartSaga(action) {
  yield put(removeFromCartSuccess(action.id));
  const state = yield select();
  yield localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
}
