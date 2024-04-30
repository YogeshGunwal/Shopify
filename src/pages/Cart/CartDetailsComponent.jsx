/* eslint-disable react/prop-types */
import '../../styles/CartDetailsComponent.scss';

const CartDetailsComponent = ({ productsInCart=0, totalCartPrice }) => {
  return (
    <div className="cart-details-container">
      <div className="cart-items">
        <span>Total Items: {productsInCart} </span>
      </div>
      <div className="total-cart-price">
        <span>Total Price: </span>
        <span>${totalCartPrice}</span>
      </div>
    </div>
  );
};

export default CartDetailsComponent;
