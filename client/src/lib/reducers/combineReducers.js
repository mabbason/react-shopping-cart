import products from "./products";
import cart from "./cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({products, cart})

// the "long form" of what combineReducers is doing under the hood
// const rootReducer = (state = {}, action) => {
//   return {
//     products: products(state.products, action),
//   }
// };

export default rootReducer;