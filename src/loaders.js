import axios from "axios";
import { GET_CATEGORIES_URL } from "./api";

export async function getCategoriesLoader(){  
  try {
    const response = await axios.get(GET_CATEGORIES_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
}


// export async function getInCategoryLoader({params}){
//   const {category} = params;
//   try {
//     const response = await axios.get(GET_IN_CATEGORY(category));
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }


// export async function getAllProducts(){  
//   try {
//     const response = await axios.get(GET_PRODUCTS_URL);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }