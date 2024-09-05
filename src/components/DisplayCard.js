import './DisplayCard.css'
import { useState } from 'react';
import { CartContext } from './CartContext';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayCard = ({item}) => {

  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState(item);

  const navigate = useNavigate();  // Hook for navigation

  const goToCart = () => {
        addToCart(items)
        navigate('/cart');  // Programmatically navigates to '/cart'
    };

    
    return (


<div class="flex font-sans card-style">
  <div class="relative">
    <img src={items.imgsrc} alt="" className="responsive-image"/>
  </div>
  <form class="flex-auto pad-b0 p-6 pt form-size form-c ">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        {items.itemName}
      </h1>
      <div class="text-lg font-semibold text-slate-500 priceper">
      ₹{items.pricePerDay}
      </div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 mb-2">
        In stock
      </div>
    </div>
    <div class="flex space-x-4 text-sm font-medium book-now">
      <div class="flex-auto flex space-x-4">
        <button onClick={goToCart} class=" pading font-semibold rounded-md bg-black text-white" type="button">
          Book now
        </button>
        <button onClick={()=>addToCart(items)} class="pading font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to cart
        </button>
      </div>
      
    </div>
   </form>
   <div className='km-class'>
    <p class="text-sm text-slate-500">
      {items.freeKmPerDay} KM included
    </p>
    <span className='priceper text-sm text-slate-500'>₹{items.pricePerDay} per extra KM</span>
    </div>
</div>

);
};

export default DisplayCard;
