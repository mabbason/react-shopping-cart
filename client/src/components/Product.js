import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductEdit from "./ProductEdit";
import { addItemToCart } from "../features/cart/cart";
import { deleteProduct } from "../features/products/products";

const Product = ({ item })=> {
  const [ showEdit, setShowEdit ] = useState(false);
  const dispatch = useDispatch();
  
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  }

  const handleDeleteProduct = async () => {
    const id = item._id;
    dispatch(deleteProduct(id));
  }

  const handleAddToCart = async () => {
    dispatch(addItemToCart({ productId: item._id }));
  }

  const showActionButtons = showEdit ? "actions product-actions hidden" : "actions product-actions";

  return (
    <div className="product">
      <div className="product-details" id={item._id}>
        <h3>{item.title}</h3>
        {
          item.title.includes('Srdjan Bobblehead') &&
          <img src="./images/srdjan_bobblehead_sml.png" alt="Srdjan Bobblehead"></img>
        }
        <p className="price">${(item.price).toFixed(2)}</p>
        <p className="quantity">{item.quantity} left in stock</p>
        <div className={showActionButtons}>
          <a className="button add-to-cart" onClick={handleAddToCart}>Add to Cart</a>
          <a className="button edit" onClick={toggleEdit}>Edit</a>
        </div>
        {showEdit && 
          <ProductEdit
            item={item} 
            onToggleEdit={toggleEdit} 
          />
        }
        <a className="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
      </div>
    </div>
  );
}

export default Product;