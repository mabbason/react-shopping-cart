import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../../services/db_query";
import { addItemToCart } from "../cart/cart";

const initialState = [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await db.getProducts();
    return data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (arg) => {
    const { newProd, callback } = arg;
    const data = await db.addNewProduct(newProd);
    if (callback) {
      callback();
    }
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      const data = await db.deleteProduct(id);
      if (data === "") {
        return id
      }
    } catch(e) {
      console.error(e);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (arg) => {
    const { updatedProd, id, callback } = arg;
    const data = await db.editProduct(updatedProd, id);
    if (callback) {
      callback();
    }
    return data;
  }
);

// export const decrementProduct = createAsyncThunk(
//   "products/addItemToCart", (item) => item);


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      return state.concat(action.payload);
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const deletedId = action.payload
      return state.filter(item => item._id !== deletedId);
    })
    builder.addCase(editProduct.fulfilled, (state, action) => {
      const updatedInventory = [...state];
      const indexOfUpdated = updatedInventory.findIndex(item => item._id === action.payload._id)
      updatedInventory.splice(indexOfUpdated, 1, action.payload);
      return updatedInventory;
    })
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      const id = action.payload.product._id;
      const modifiedItems = state.map(item => {
        return item._id === id ? action.payload.product : item
      })
      return modifiedItems;
    })
  }
});

export default productSlice.reducer;