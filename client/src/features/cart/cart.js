import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../../services/db_query";

const initialState = [];

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async () => {
    const data = await db.getCartItems();
    return data;
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (item) => {
    const data = await db.addItemToCart(item);
    return data;
  }
);

export const checkoutCart = createAsyncThunk(
  "cart/checkoutCart",
  async () => {
    const data = await db.checkoutCart();
    return data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      const id = action.payload.item._id;
      const tempCart = state.filter(item => item._id !== id)
      return [...tempCart, action.payload.item]
    });
    builder.addCase(checkoutCart.fulfilled, (state, action) => {
      return [];
    });
  }
});

export default cartSlice.reducer;