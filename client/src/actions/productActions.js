export const productsReceived = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: products }
}

export const productAdded = (newProduct) => {
  return { type: "PRODUCT_ADDED", payload: newProduct }
}