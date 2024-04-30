import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import DisplayProducts from "../Display/DisplayProducts";
import EmptyPage from "../EmptyPage";

export default function Wishlist() {

  const wishlistProducts = useSelector(state => state.products.wishlistProducts);


  if(!wishlistProducts.length){
    return(
      <EmptyPage displayMessage='No Items in Your Wishlist.. Add Some..' linkMessage='Explore Products' />
    )
  }

  return (
    <div>
      <DisplayProducts products={wishlistProducts} />
    </div>
  )
}
