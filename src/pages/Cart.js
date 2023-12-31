import React, { useContext } from 'react';
import Products from '../Products'
import { ShopContext } from './ShopContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1> your cart items </h1>
      </div>
      <div className='cart-page'>
        <div className='cartItems'>
          {Products.map((product) => {
           return ((cartItems[product.id] !== 0) ? <CartItem data={product} /> : "" )
          }
          )}
        </div>
        <div className='checkout'>
          {totalAmount > 0 ? (
            <>
              <p className='subtotal'>Subtotal: ${totalAmount}</p>
              <div className="checkout-buttons-container">
                <button className='shopping-button' onClick={() => navigate("/")}>CONTINUE SHOPPING</button>
                <button className='checkout-button'>CHECK OUT</button>
              </div>
            </>
          ) : (
            <>
            <h1>your cart is empty</h1>
            <button className='shopping-button' onClick={() => navigate("/")}>SHOP NOW</button>
            </>
             )}
        </div>
      </div>
    </div>
  );
};

export default Cart;