import {
  ADD_PRODUCT_ADMIN,
  ADD_PRODUCT_ADMIN_SUCCESS,
  DELETE_PRODUCT_ADMIN,
  DELETE_PRODUCT_ADMIN_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
} from "../actions/actionTypes";

const iState = {
  products: [],
  product: null,
  error: {},
};

export default function productReducer(state = iState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case ADD_PRODUCT_ADMIN:
      return {
        ...state,
      };
    case ADD_PRODUCT_ADMIN_SUCCESS:
      return {
        ...state,
        products: [payload, ...state.products],
      };
    case DELETE_PRODUCT_ADMIN:
      return {
        ...state,
      };
    case DELETE_PRODUCT_ADMIN_SUCCESS:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
      };

    default:
      return state;
  }
}
