import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../services/db_query";
// import { cartCheckedOut } from "../actions/cartActions";
import { fetchCart, checkoutCart } from "../features/cart/cart";
import CartItem from "./CartItem";
import calcCartTotal from "../lib/calcCartTotal";

const Cart = () => {
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleCheckoutCart = async () => {
    dispatch(checkoutCart())
    // try {
    //   await db.checkoutCart();
    //   dispatch(cartCheckedOut())
    // } catch(e) {
    //   console.error(e);
    // }
  }
  
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
        <a href="/#" className="button checkout" onClick={handleCheckoutCart}>Checkout</a>
      </div>
  )
}


export default Cart;