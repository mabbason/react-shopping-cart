import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../services/db_query";
import { cartReceived } from "../actions/cartActions";
import CartItem from "./CartItem";
import calcCartTotal from "../lib/calcCartTotal";

const Cart = ({ onCheckoutCart }) => {
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchCart = async () => {
      const data  = await db.getCartItems();
      // dispatch({type: "CART_RECEIVED", payload: data})
      dispatch(cartReceived(data));
    };
    fetchCart();
  }, [dispatch]);
  
  if (currentCart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a href="/#" className="button checkout disabled">Checkout</a>
      </div>
    );
  }

  return (
    <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {currentCart.map(cartItem => <CartItem key={cartItem._id} itemDetail={cartItem}/>)}
          <tr>
            <td colSpan="3" className="total">Total: ${calcCartTotal(currentCart)}</td>
          </tr>
          </tbody>
          
        </table>
        <a href="/#" className="button checkout" onClick={onCheckoutCart}>Checkout</a>
      </div>
  )
}


export default Cart;