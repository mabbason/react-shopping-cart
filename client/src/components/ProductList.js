import Product from "./Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/products";

const ProductList = ({ onAddToCart }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
        {products.map(item => 
          <Product 
            key={item._id.toString()} 
            item={item} 
            onAddToCart={onAddToCart}
          />)
        }   
    </div>
  )
}

export default ProductList;