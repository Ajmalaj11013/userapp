import './BookingDisplay.css'
import BookingDisplay from './BookingDisplay'
const Bookings = () => {

  const bookedItems = [
    {
      id: 1,
      itemName: 'Yamaha R15',
      itemNo: 'MH12AB1234',
      location: 'Pune',
      advance:1000,
      pickup: '09-09-24',
      dropoff: '09-09-24'

    },
    {
    id: 2,
      itemName: 'Himalayan',
      itemNo: 'KL11AS6636',
      location: 'kozhikode',
      advance:2000,
      pickup: '10-09-24',
      dropoff: '11-09-24'
    },
    {
      id: 3,
        itemName: 'Exter',
        itemNo: 'KL85B7604',
        location: 'Ernakulam',
        advance:3000,
        pickup: '19-09-24',
        dropoff: '21-09-24'
      }
  ];

    return (
      <div className="fullscreen-div">
         {bookedItems.length > 0 ? (
        <div>
            {bookedItems.map((item) => (
              <BookingDisplay key={item.id} item={item}/>
            ))}
        </div>
        ):(<p>you don't have any Bookings</p>)}
      </div>
    );
  };
  
  export default Bookings;