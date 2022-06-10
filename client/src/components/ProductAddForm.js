import { useState } from "react";
import { useDispatch } from "react-redux";
import db from "../services/db_query";
import { productAdded } from "../actions/productActions";

const ProductAddForm = ()=> {
  const [ showForm, setShowForm ] = useState(false);
  const [ newProdTitle, setNewProdTitle ] = useState('');
  const [ newProdPrice, setNewProdPrice ] = useState('');
  const [ newProdQuantity, setNewProdQuantity ] = useState('');

  const dispatch = useDispatch();

  const resetForm = () => {
    setNewProdTitle(''); 
    setNewProdPrice('');
    setNewProdQuantity('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProd = {
      title: newProdTitle,
      price: newProdPrice,
      quantity: newProdQuantity
    };
    
    try {
      const addedProd = await db.addNewProduct(newProd)
      dispatch(productAdded(addedProd));
      toggleForm(); 
      resetForm();
    } catch(e) {
      console.error(e)
    }
  }  

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleTitleChange = (e) => {
    setNewProdTitle(e.target.value);
  }

  const handlePriceChange = (e) => {
    setNewProdPrice(e.target.value);
  }

  const handleQtyChange = (e) => {
    setNewProdQuantity(e.target.value);
  }

  const addFormClass = showForm ? "add-form visible" : "add-form";
  const showAddButton = showForm ? "button add-product-button" : "button add-product-button visible";

  return (
    <div className={addFormClass}>
        <p><a href="/#" className={showAddButton} onClick={toggleForm}>Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value={newProdTitle} onChange={handleTitleChange}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" value={newProdPrice} onChange={handlePriceChange}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={newProdQuantity} onChange={handleQtyChange}/>
          </div>

          <div className="actions form-actions">
            <a href="" className="button" onClick={handleSubmit}>Add</a>
            <a href="" className="button" onClick={toggleForm}>Cancel</a>
          </div>
        </form>
      </div>
  );
}

export default ProductAddForm;