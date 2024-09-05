import './CartDisplay.css';
import { LocationIcon } from './icons/Myicon';

function BookingDisplay({item}) {

  return (
    <div className="Book-list">
      <div className='flex2'>
        <span>{item.itemName.padEnd(12,' ')}</span>
        <span className='flex3'><span className='map-color'><LocationIcon/></span> {item.location}</span>
        <button className="add-button">+</button>
      </div>
      <div className="flex2 myfont2">
      <span>Pickup:{item.pickup.padEnd(10,' ')}</span>
      <span>Dropoff:{item.dropoff.padEnd(10,' ')}</span> 
      <span>Advance:{item.advance}₹</span>
     </div>
     <p className='green'>Booking is confirmed</p>
    </div>
    
  );
}

export default BookingDisplay;