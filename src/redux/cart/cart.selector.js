export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (accumulator, current) => accumulator + current.quantity  
  , 0)
}

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity
  , 0)
}