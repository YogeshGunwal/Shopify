/* eslint-disable react/prop-types */

import { Button } from '@mui/material';
import { useSelector ,useDispatch} from "react-redux";
import { addToCart, addToWishList, removeFromCart, removeFromWishList } from "../../features/products/productsSlice";


export default function WishlistCartToggleButton({type='',productId}) {
  
  productId = Number(productId);

  const productProperties= useSelector(state => state.products.products).filter(product => product.id === productId)[0];
  const dispatch = useDispatch();

  let isInCart= false;
  let isInWishlist = false;

  if(productProperties ){
    isInWishlist = productProperties.isInWishlist;
    isInCart = productProperties.isInCart;
  }

  const handleClick = () => {
    if (type === 'wishlist') {
      if (!isInWishlist) dispatch(addToWishList(productId));
      else dispatch(removeFromWishList(productId));
    } else if (type === 'cart') {
      if (!isInCart) dispatch(addToCart(productId));
      else dispatch(removeFromCart(productId));
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary"  onClick={handleClick}>
        {type === 'wishlist' ? (isInWishlist ? "Remove From Wishlist ❤️" : "Add To Wishlist ❤️") :
            (isInCart ? "Remove From Cart 🛒" : "Add To Cart 🛒")}
      </Button>
    </div>
  )
}