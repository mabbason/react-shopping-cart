export const productsReceived = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: products };
}

export const productAdded = (product) => {
  return { type: "PRODUCT_ADDED", payload: product };
}

export const productDeleted = (id) => {
  return { type: "PRODUCT_DELETED", payload: id };
}

export const productUpdated = (product) => {
  return { type: "PRODUCT_UPDATED", payload: product}
}

export const productDecremented = (id) => {
  return { type: "PRODUCT_DECREMENTED", payload: id}
}