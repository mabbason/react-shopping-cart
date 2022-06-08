import { useState } from "react";
import EditProduct from "./EditProduct";

const Product = ({item, onHandleEdit, onHandleDelete })=> {
  const [ showEdit, setShowEdit ] = useState(false);
  
  const toggleEdit = (e) => {
    e.preventDefault();
    setShowEdit(!showEdit)
  }

  const handleDelete = (e) => {
    e.preventDefault();
    onHandleDelete(e.target.parentElement.parentElement.id);
  }

  const showActionButtons = showEdit ? "actions product-actions hidden" : "actions product-actions";

  return (
    <div className="product">
      <div className="product-details" id={item._id}>
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity} left in stock</p>
        <div className={showActionButtons}>
          <a href="/#" className="button add-to-cart">Add to Cart</a>
          <a href="/#" className="button edit" onClick={toggleEdit}>Edit</a>
        </div>
        {showEdit && 
          <EditProduct 
            item={item} 
            onToggleEdit={toggleEdit} 
            onHandleEdit={onHandleEdit}
          />
        }
        <a href="/#" className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  );
}

export default Product;