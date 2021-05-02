import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: {
    title: "Iphone X",
    category: "Mobile",
  },
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
