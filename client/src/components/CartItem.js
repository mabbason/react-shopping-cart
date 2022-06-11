const CartItem = ({ itemDetail }) => {
  return (
    <>
      <tr>
        <td>{itemDetail.title}</td>
        <td>{itemDetail.quantity}</td>
        <td>${itemDetail.quantity * itemDetail.price}</td>
      </tr>
    </>
  )
}

export default CartItem;