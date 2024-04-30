/* eslint-disable react/prop-types */
import '../../styles/DisplayProduct.scss'
import { Link, useLocation } from 'react-router-dom'
import WishlistCartToggleButton from '../Button/WishlistCartToggleButton';

export default function DisplayProduct({product, productType}) {

  const location = useLocation();
  const pathname = location.pathname;

  const isDisplayAllDetails = pathname.includes('products');

  let cardClassName = "card";
  if(productType) cardClassName = "featured-card";
  if(isDisplayAllDetails) cardClassName = "product-card";

  return (
    <div className= {cardClassName}>

      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>

      <div className={productType ? "featured-details-container" : "details-container"}>

        <h4>{product.title}</h4>

        {
          isDisplayAllDetails  &&
          <p><b>Description:</b> <i>{product.description}</i></p>
        }

        {!productType && <p><b>Price: </b> ${product.price}</p>}

        {
          !productType && pathname==='/' || pathname==='/wishlist' || pathname==='/cart' || isDisplayAllDetails
            ? <p><b>Category: </b> <Link to={`/category/${product.category}`}>{product.category}</Link></p>
            : null
        }

        {!productType && <p><b>Ratings:</b> {product.rating?.rate} &#9733; | {product.rating?.count} </p>}

        {
          !isDisplayAllDetails &&
          <div className="product-link">
            <Link to={`/products/${product.id}`} > View Product </Link>
          </div>
        }

        <div className='buttons-container'>
          {
            (pathname === '/wishlist' || isDisplayAllDetails)  &&
            <WishlistCartToggleButton type='wishlist' productId={product.id}/>
          }
          {
            (pathname === '/cart' || isDisplayAllDetails) &&
            <WishlistCartToggleButton type='cart' productId={product.id}/>
          }
        </div>

      </div>
    </div>
  )
}