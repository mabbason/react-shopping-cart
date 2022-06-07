import { React, useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";
import data from "../lib/data.js"
import productService from '../services/products'

const App = () => {
	const [products, setProducts] = useState([]);
  const [productFormVisible, setProductFormVisible] = useState(false);
  
  const getProducts = () => {
    productService
      .getAll()
      .then(initialProducts => {
        setProducts(initialProducts)
      })
  }
  useEffect(getProducts, [])

  const toggleProductFormVisibility = () => {
    setProductFormVisible(!productFormVisible)
  }

	return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductListing products={products}/>
        <AddProductForm toggleVisibility={toggleProductFormVisibility} visible={productFormVisible}/>
      </main>
    </div>
  );
};

export default App;
