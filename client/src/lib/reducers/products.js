const products = (state = [], action) => {
  switch(action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload;
    }
    case "PRODUCT_ADDED": {
      return [...state, action.payload];
    }
    case "PRODUCT_DELETED": {
      const deletedId = action.payload
      return state.filter(item => item._id !== deletedId);
    }
    case "PRODUCT_UPDATED": {
      const updatedInventory = [...state];
      const indexOfUpdated = updatedInventory.findIndex(item => item._id === action.payload._id)
      updatedInventory.splice(indexOfUpdated, 1, action.payload);
      return updatedInventory;
    }
    case "ADDED_TO_CART": {
      const id = action.payload.product._id;
      const modifiedItems = state.map(item => {
        if (item._id === id) {
          item.quantity -=1;
        }
        return item;
      })
      return modifiedItems;
    }
    default: {
      return state;
    }
  }
}

export default products;