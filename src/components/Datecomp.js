import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Datecomp.css';
import { useState } from 'react';

const Datecomp = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    return (
      <div className="card-details">
        <div>
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
          className='pick marg-bot'
        />
      </div>
      </div>
      <button class="search-button" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M10 2a8 8 0 105.29 14.71l4.39 4.39a1 1 0 001.41-1.41l-4.39-4.39A8 8 0 0010 2zm0 2a6 6 0 11-6 6 6 6 0 016-6z"/>
        </svg>
      </button>
      </div>
    );
  };
  
  export default Datecomp;
  