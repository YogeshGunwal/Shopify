
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams} from "react-router-dom";
import { fetchProduct } from "../../features/products/productSlice";

import DisplayProduct from "./DisplayProduct";
import Loading from "../Loading";
import ErrorFetching from "../ErrorFetching";

export default function DisplayProductDetails() {

  const {productId} = useParams();

  const dispatch = useDispatch();
  const { loadingProduct, product, productError } = useSelector(state => state.product);


  useEffect(()=>{
    dispatch(fetchProduct(productId));
  },[dispatch,productId])


  if (loadingProduct) {
    return (
      <Loading />
    )
  }

  if (productError) {
    return (
      <ErrorFetching error={productError} />
    )
  }
  
  return (
    <div>
      <DisplayProduct product={product} />
    </div>
  );
}