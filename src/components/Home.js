import './Home.css'
import Datecomp from "./Datecomp";
import DisplayCard from "./DisplayCard";
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import TypingEffect from './TypingEffect';
import { useState } from 'react';


const Home = () => {

  const [initialItems, setinitialItems] = useState([]);

  const handleDisplay = (startDate,endDate) => {
    // Function to handle data received from child
    if(getLocation()=== '')
    {
      alert('please choose a location')
    }
    else{
      setinitialItems([
        {
          id: 1,
          itemName: 'Yamaha R15',
          itemNo: 'MH12AB1234',
          pricePerDay: '500',
          pricePerKm: '5',
          freeKmPerDay: '100',
          location: 'Pune',
          imgsrc:'/userapp/yamahaR15.jpg',
          advance:1000,
          totalQuantity:5
        },
        {
        id: 2,
          itemName: 'Himalayan',
          itemNo: 'KL11AS6636',
          pricePerDay: '100',
          pricePerKm: '4',
          freeKmPerDay: '100',
          location: 'kozhikode',
          imgsrc:'/userapp/himalayan.png',
          advance:2000,
          totalQuantity:5
        },
        {
          id: 3,
            itemName: 'Exter',
            itemNo: 'KL85B7604',
            pricePerDay: '1000',
            pricePerKm: '10',
            freeKmPerDay: '100',
            location: 'Ernakulam',
            imgsrc:'/userapp/exter.avif',
            advance:3000,
            totalQuantity:5
          }
      ]
    );
      
    }
   
  };

  
  const { getLocation } = useContext(CartContext);

  const segments = [
    { text: "Renting made simpler", color: 'orange', position: { top: '30%', left: '20%' } },
    { text: "Easy and fast process", color: 'black', position: { top: '45%', left: '30%' } },
    { text: "Hassle-free experience", color: 'green', position: { top: '60%', left: '20%' } }
  ];
  
    return (
      <div className='home-layout'>
      <Datecomp handleDisplay={handleDisplay}/>
      {getLocation() === '' ? (<>
        <div></div>
        {/* <TypingEffect segments={segments} typingSpeed={100} delay={2000} />*/}      
      </>):
      (<div className="card-container">
        <div className='remove-none'>
        {document.body.style.backgroundImage = 'none'}  
        </div> 
        {initialItems.map((item) => (
          <DisplayCard key={item.id} item={item} />
        ))}
      </div>
      )}
      </div>
    );
  };
  
  export default Home;