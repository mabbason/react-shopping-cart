import React from 'react'

const ProductEdit = ({ product }) => {
  return (
		<div className="edit-form">
		<h3>Edit Product</h3>
		<form>
			<div className="input-group">
				<label for="product-name">Product Name</label>
				<input type="text" id="product-name" value={product.title}/>
			</div>

			<div className="input-group">
				<label for="product-price">Price</label>
				<input type="text" id="product-price" value={product.price}/>
			</div>

			<div className="input-group">
				<label for="product-quantity">Quantity</label>
				<input type="text" id="product-quantity" value={product.quantity}/>
			</div>

			<div className="actions form-actions">
				<a className="button">Update</a>
				<a className="button">Cancel</a>
			</div>
		</form>
	</div>
  )
}

export default ProductEdit