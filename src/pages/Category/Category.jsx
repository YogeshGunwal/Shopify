import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoryProducts } from "../../features/products/categoryProducts";
import DisplayProducts from "../Display/DisplayProducts";
import Loading from "../Loading";
import ErrorFetching from "../ErrorFetching";

export default function Category() {

  const {category} = useParams();

  const dispatch = useDispatch();  

  useEffect(()=>{
    dispatch(fetchCategoryProducts(category));
  },[dispatch,category])

  const {loadingCategoryProducts, categoryProducts, categoryProductsError } = useSelector(state => state.categoryProducts);

  if (loadingCategoryProducts) {
    return(
      <Loading />
    )
  }

  if (categoryProductsError) {
    return (
      <ErrorFetching error={categoryProductsError}/>
    )
  }

  return (
    <>
      <DisplayProducts products={categoryProducts}/>
    </>
  )
}