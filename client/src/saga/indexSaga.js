import { takeEvery } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  ADD_PRODUCT_ADMIN,
  DELETE_PRODUCT_ADMIN,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/actionTypes";
import {
  getProductsSaga,
  addProductsSaga,
  deleteProductSaga,
} from "./productSaga";
import { addToCartSaga, removeFromCartSaga } from "./cartSaga";

export function* watchProducts() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
  yield takeEvery(ADD_PRODUCT_ADMIN, addProductsSaga);
  yield takeEvery(DELETE_PRODUCT_ADMIN, deleteProductSaga);
}

export function* watchCart() {
  yield takeEvery(ADD_TO_CART, addToCartSaga);
  yield takeEvery(REMOVE_FROM_CART, removeFromCartSaga);
}
