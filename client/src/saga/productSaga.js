import { put } from "redux-saga/effects";
import axios from "axios";
import {
  getProductsSuccess,
  addProductsSuccess,
  deleteProductsSuccess,
} from "../actions/productAction";

export function* getProductsSaga(action) {
  try {
    const response = yield axios.get("/api/products");
    yield put(getProductsSuccess(response.data));
  } catch (err) {
    yield alert(err);
  }
}

export function* addProductsSaga(action) {
  const token = yield localStorage.getItem("token");
  const config = yield {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = yield axios.post("/api/products", action.data, config);
    yield put(addProductsSuccess(response.data));
  } catch (err) {
    yield alert(err);
  }
}

export function* deleteProductSaga(action) {
  yield console.log(action);
  const token = yield localStorage.getItem("token");
  const config = yield {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    yield axios.delete(`/api/products/${action.id}`, config);
    yield put(deleteProductsSuccess(action.id));
  } catch (err) {
    yield alert(err);
  }
}
