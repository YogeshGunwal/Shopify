import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productsSlice';
import productReducer from '../features/products/productSlice';
import categoryProductsReducer from '../features/products/categoryProducts';
import userAuthenticationReducer from '../features/users/authenticateUserSlice';

const store = configureStore({
  reducer:{
    products: productsReducer,
    product: productReducer,
    categoryProducts: categoryProductsReducer,
    userToken: userAuthenticationReducer,
  }
});

export default store;