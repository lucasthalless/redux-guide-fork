import cartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload
})

export const removeProductFromCart = (payload) => ({
  type: cartActionTypes.REMOVE_PRODUCT,
  payload
})

export const increaseProductQuantity = (payload) => ({
  type: cartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload
})

export const decreaseProductQuantity = (payload) => ({
  type: cartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload
})
