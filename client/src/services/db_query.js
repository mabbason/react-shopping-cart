import axios from "axios";
const productURL = '/api/products';
const cartURL = '/api/cart';

const getProducts = async () => {
  const { data } = await axios.get(productURL);
  return data;
}

const getCartItems = () => {
  const req = axios.get(cartURL);
  return req.then(res => res.data);
}

const addNewProduct = async (newProduct) => {
  const { data } = await axios.post(productURL,newProduct);
  return data;
}

const editProduct = (updatedProduct, id) => {
  const req = axios.put(`${productURL}/${id}`, updatedProduct);
  return req.then(res => res.data);
}

const deleteProduct = async(id) => {
  const req = axios.delete(`${productURL}/${id}`);
  return req.then(res => res.data);
}

const addItemToCart = (item) => {
  const req = axios.post('api/add-to-cart', item);
  return req.then(res => res.data); // returns a cart item object for added item
}

const checkoutCart = () => {
  const req = axios.post('api/checkout');
  return req.then(res => res.data); // returns number of deleted products
}

const dbServices = {
  getProducts,
  getCartItems,
  addNewProduct,
  editProduct,
  deleteProduct,
  addItemToCart,
  checkoutCart
}

export default dbServices;
