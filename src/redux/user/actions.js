import userActionTypes from "./action-types";

export const userLogin = (payload) => ({
  type: userActionTypes.LOGIN,
  payload: payload
})

export const userLogout = () => ({
  type: userActionTypes.LOGOUT,
})