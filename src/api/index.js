export const GET_CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';
export const GET_PRODUCTS_URL = 'https://fakestoreapi.com/products';
export const AUTHENTICATE_USER_URL = 'http://localhost:5079/api/authentication/authenticate';

export const GET_IN_CATEGORY = category => {
  return `https://fakestoreapi.com/products/category/${category}`;
}

export const GET_PRODUCT_BY_ID = productId => {
  return `https://fakestoreapi.com/products/${productId}`;
}