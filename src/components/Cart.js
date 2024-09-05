import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css'
import CartDisplay from './CartDisplay';



function Cart() {

  const { cartItems , payNow } = useContext(CartContext);


  return (
    <div className="fullscreen-div">
      {cartItems.length > 0 ? (
    <>
    <div>
    {cartItems.map((item) => (
        <CartDisplay key={item.id} item={item}/>
      ))}
    </div>
  <div className='advance'>
    <span>Total advance: {payNow()}₹</span>
    <button className='pay-button'>Pay now</button>
  </div>
  </>
      ):(<p>cart is empty</p>)}
  </div>
  );
}

export default Cart;
