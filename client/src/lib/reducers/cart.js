const cart = (state = [], action) => {
  switch(action.type) {
    case "CART_RECEIVED": {
      return action.payload;
    }
    case "ADDED_TO_CART": {
      const id = action.payload.item._id;
      const tempCart = state.filter(item => item._id !== id)
      return [...tempCart, action.payload.item]
    }
    case "CART_CHECKED_OUT": {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default cart;