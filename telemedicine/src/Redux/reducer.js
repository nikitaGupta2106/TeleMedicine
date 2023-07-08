import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  MY_CART,
  MY_FAV,
  UPDATE_CART,
  UPDATE_FAVORITES,
} from "./actionType";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  cart: [],
  favourites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }

    case MY_CART: {
      return { ...state, cart: [...state.cart, payload] };
    }

    case UPDATE_CART: {
      return { ...state, cart: payload };
    }
    case MY_FAV: {
      const isProductInFav = state.favourites.some(
        (item) => item.id === payload.id
      );

      if (isProductInFav) {
        return {
          ...state,
          favourites: state.favourites.filter((item) => item.id !== payload.id),
        };
      } else {
        return {
          ...state,
          favourites: [...state.favourites, payload],
        };
      }
    }
    case UPDATE_FAVORITES: {
      return { ...state, favourites: payload };
    }

    default:
      return state;
  }
};
export default reducer;
