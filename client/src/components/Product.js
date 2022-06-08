import React from 'react'
import ProductEdit from './ProductEdit';

const Product = ( { product, onDeleteProduct, onUpdateProduct, onAddCartItem } ) => {
	const handleDeleteProduct = (e) => {
		e.preventDefault();
		onDeleteProduct(product._id);
	}

	const handleAddCartItem = () => {
    onAddCartItem(product._id)
  }


	return (
		<div className="product">
			<div className="product-details">
				<h3>{product.title}</h3>
				<p className="price">{product.price}</p>
				<p className="quantity">`{product.quantity} left in stock`</p>
				<div className="actions product-actions">
					<a className="button add-to-cart" onClick={handleAddCartItem}>Add to Cart</a>
					<a className="button edit">Edit</a>
				</div>
				<a className="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
			</div>
			<ProductEdit product={product} onUpdateProduct={onUpdateProduct}/>
		</div>
	)
};

export default Product