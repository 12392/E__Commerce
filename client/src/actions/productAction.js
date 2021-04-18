import {
  ADD_PRODUCT_ADMIN,
  ADD_PRODUCT_ADMIN_SUCCESS,
  DELETE_PRODUCT_ADMIN,
  DELETE_PRODUCT_ADMIN_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductsSuccess = (productDetails) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: productDetails,
  };
};

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT_ADMIN,
    data,
  };
};

export const addProductsSuccess = (productDetails) => {
  return {
    type: ADD_PRODUCT_ADMIN_SUCCESS,
    payload: productDetails,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT_ADMIN,
    id,
  };
};

export const deleteProductsSuccess = (productDetails) => {
  return {
    type: DELETE_PRODUCT_ADMIN_SUCCESS,
    payload: productDetails,
  };
};
