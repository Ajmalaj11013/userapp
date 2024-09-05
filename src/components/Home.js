import './Home.css'
import Datecomp from "./Datecomp";
import DisplayCard from "./DisplayCard";

const Home = () => {

  const initialItems = [
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
  ];

    return (
      <div className='home-layout'>
      <Datecomp/>
      <div className="card-container">
        {initialItems.map((item) => (
          <DisplayCard key={item.id} item={item} />
        ))}
      </div>
      </div>
    );
  };
  
  export default Home;