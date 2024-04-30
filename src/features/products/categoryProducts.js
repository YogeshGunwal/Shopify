import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { GET_IN_CATEGORY } from "../../api";


//  pending, fulfilled, rejected..
export const fetchCategoryProducts = createAsyncThunk('categoryProducts/fetchCategoryProducts', async(category) => {  
  const response = await axios.get(GET_IN_CATEGORY(category));
  return response.data;  
});

const initialState = {
  loadingCategoryProducts: false,
  categoryProducts: [],
  categoryProductsError: null,
};

const categoryProductsSlice = createSlice({
  name:'categoryProducts',
  initialState,
  
  extraReducers: (builder) => {
  builder.
    addCase(fetchCategoryProducts.pending, (state) => {
      state.loadingCategoryProducts = true;
    })
    .addCase(fetchCategoryProducts.fulfilled, (state,action) =>{
      state.loadingCategoryProducts = false;
      state.categoryProducts = action.payload;
    })
    .addCase(fetchCategoryProducts.rejected, (state,action) =>{
      state.loadingCategoryProducts = false;     
      state.categoryProductsError = action.error.message;      
    });
  },  
});

export default categoryProductsSlice.reducer;
