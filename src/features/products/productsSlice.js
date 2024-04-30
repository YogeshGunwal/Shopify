import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { GET_PRODUCTS_URL } from "../../api";


//  pending, fulfilled, rejected..
export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {  
  const response = await axios.get(GET_PRODUCTS_URL);
  return response.data;  
});

const initialState = {
  loading: false,
  products: [],
  error: null,
  wishlistProducts: [],
  cartProducts: [],
};

const productsSlice = createSlice({
  name:'products',
  initialState,

  reducers:{
    addToWishList: (state,action) => {
      const { payload: productId } = action;
      state.products = state.products.map(product => {
        if (product.id === productId) {
          state.wishlistProducts.push(product);
          return { ...product, isInWishlist: true };
        }
        return product;
      });
    },

    removeFromWishList: (state,action) => {
      const { payload: productId } = action;
      state.products = state.products.map(product => {
        if (product.id === productId) {
          state.wishlistProducts = state.wishlistProducts.filter(product => product.id!== productId);
          return { ...product, isInWishlist: false };
        }
        return product;
      });
    },

    addToCart: (state,action) => {
      const {payload: productId} = action;
      state.products = state.products.map(product => {
        if(product.id === productId){
          state.cartProducts.push(product);
          return {...product, isInCart: true};
        }
        return product;
      })
    },

    removeFromCart: (state,action) => {
      const { payload: productId } = action;
      state.products = state.products.map(product => {
        if (product.id === productId) {
          state.cartProducts = state.cartProducts.filter(product => product.id!== productId);
          return { ...product, isInCart: false };
        }
        return product;
      });
    },    
  },  

  extraReducers: (builder) => {
  builder.
    addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProducts.fulfilled, (state,action) =>{
      state.loading = false;
      state.products = action.payload?.map(product => (
        {
          ...product,
          isInWishlist: false,
          isInCart: false,
        }
      ));
    })
    .addCase(fetchProducts.rejected, (state,action) =>{
      state.loading = false;     
      state.error = action.error.message;      
    })
    .addDefaultCase(state => {
      return state;
    });
  },  
});

export const {addToWishList, removeFromWishList, addToCart, removeFromCart} = productsSlice.actions;

export default productsSlice.reducer;