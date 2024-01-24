import cartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload
})