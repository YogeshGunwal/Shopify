/* eslint-disable react/prop-types */
import DisplayProduct from "./DisplayProduct";
import '../../styles/DisplayProducts.scss';
import { useLocation } from "react-router-dom";


export default function DisplayProducts({products, productType=''}) {  

  const location = useLocation();

  return (
    <div className="products-card">
      {productType && <h2 className="products-type-heading">{productType}</h2>}
      {!productType && location.pathname === '/' ? <h2 className="products-type-heading">All Products</h2> : ''}

      <div className="display-items-container">
        {products.map(product => (
          <DisplayProduct key={product.id} product= {product} productType={productType}/>
        ))}
      </div>
    </div>    
  )
}