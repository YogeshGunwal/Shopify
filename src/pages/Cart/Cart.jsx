import { useSelector } from "react-redux";
import EmptyPage from "../EmptyPage";
import DisplayProducts from "../Display/DisplayProducts";
import CartDetailsComponent from "./CartDetailsComponent";

export default  function Cart() {

 const cartProducts = useSelector(state => state.products.cartProducts);

  const totalCartPrice = cartProducts.reduce((totalPrice, product) => {
    return totalPrice + product.price;
  },0)

  if(!cartProducts.length){
    return(
      <EmptyPage displayMessage='No Items in Your Cart.. Add Some..' linkMessage='Explore Products' />
    )
  }

  return (
    <div>
      <DisplayProducts products={cartProducts} />
      <CartDetailsComponent productsInCart={cartProducts.length} totalCartPrice={totalCartPrice} />
    </div>
  )
}
