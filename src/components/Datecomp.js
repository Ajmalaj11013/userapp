import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Datecomp.css';
import { useState } from 'react';

const Datecomp = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    return (
      <div className="card-details">
        <div className='search-bar'>
        <span className='pre'>{'Pickup'.padEnd(5,' ')}   </span>  
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}  // This sets the minimum date to today
          className='pick'
        />
      </div>
      <div className='search-bar'>
      <span className='pre'>{'Dropoff'.padEnd(4,' ')}  </span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          className='pick'
        />
      </div>
      </div>
    );
  };
  
  export default Datecomp;
  