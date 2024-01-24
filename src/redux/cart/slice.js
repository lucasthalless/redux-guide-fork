import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productAlreadyInCart = state.products.some(product => product.id === action.payload.id)

      if (productAlreadyInCart) {
        state.products = state.products.map((product) =>
            product.id === action.payload.id
              ? {...product, quantity: product.quantity + 1}
              : product
          )
      }

      state.products = [...state.products, {...action.payload, quantity: 1}]
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload)
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload
          ? {...product, quantity: product.quantity + 1}
          : product
      )
    },
    decreaseProductQuantity: (state, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload
          ? {...product, quantity: product.quantity - 1}
          : product
      ).filter(product => product.quantity > 0)
    }
  }
})

export const { addProduct, increaseProductQuantity, decreaseProductQuantity, removeProduct } = cartSlice.actions

export default cartSlice.reducer;