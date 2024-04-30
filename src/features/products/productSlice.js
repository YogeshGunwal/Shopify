import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_PRODUCT_BY_ID } from "../../api";

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct', 
  async(productId) => {
    const response = await axios.get(GET_PRODUCT_BY_ID(productId));
    // console.log('fetchProduct',response);
    return response?.data;
  }
);

const initialState = {
  loadingProduct: false,
  product: {},
  productError: null, 
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers:{
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProduct.pending , (state) => {
      state.loadingProduct = true;
    })
    .addCase(fetchProduct.fulfilled, (state,action) => {
      state.loadingProduct = false;
      state.product = action.payload;
    })
    .addCase(fetchProduct.rejected, (state,action) => {
      state.loadingProduct = false;
      state.productError = action.error?.message;
    })
    .addDefaultCase((state)=>{
      return state;
    });
  },
})

export default productSlice.reducer;