import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  MY_CART,
  UPDATE_CART,
  MY_FAV,
  UPDATE_FAVORITES,
} from "./actionType";

// -----------------------------------------------------------------------------GET -REQUEST, FAILURE, SUCCESS
export const getRequest = () => {
  return {
    type: PRODUCT_REQUEST,
  };
};

export const getFailure = () => {
  return {
    type: PRODUCT_FAILURE,
  };
};

export const getSuccess = (payload) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: payload,
  };
};

export const myCart = (payload) => {
  return {
    type: MY_CART,
    payload: payload,
  };
};

export const updateCart = (payload) => {
  return {
    type: UPDATE_CART,
    payload: payload,
  };
};

export const myFav = (payload) => {
  return {
    type: MY_FAV,
    payload: payload,
  };
};

export const updateFavorites = (favorites) => {
  return {
    type: UPDATE_FAVORITES,
    payload: favorites,
  };
};
