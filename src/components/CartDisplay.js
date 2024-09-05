import './CartDisplay.css';
import { CartContext } from './CartContext';
import React, { useContext } from 'react';

function CartDisplay({item}) {

  const { addToCart , removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-list">
      <div className='flex1'>
        <span>{item.itemName.padEnd(14,' ')}</span>
        <span>Quantity:{item.cartQuantity}</span>
        <button onClick={()=>addToCart(item)} className="add-button">+</button>
      </div>
      <div className="flex1 myfont1">
      <span>Advance:{item.advance}₹</span>
      <button onClick={()=>removeFromCart(item.id)} className="add-button">-</button>
     </div>
    </div>
    
  );
}

export default CartDisplay;