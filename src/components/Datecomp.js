import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Datecomp.css';
import TimePicker from './TimePicker';

import { useState } from 'react';
import { DateIcon,SearchIcon } from './icons/Myicon';

const Datecomp = ({handleDisplay}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    
    return (
      <div className="card-details">
        <div>
        <div className='search-bar'>
        <span className='pre'>{'Pickup'.padEnd(3,' ')}   </span>  
        <DateIcon/>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}  // This sets the minimum date to today
          className='pick'
        />
        <TimePicker/>
      </div>
      <div className='search-bar'>
      <span className='pre'>{'Dropoff'.padEnd(3,' ')}  </span>
        <DateIcon/>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          className='pick'
        />
        <TimePicker/>
      </div>
      </div>
      <button onClick={()=>handleDisplay(startDate,endDate)} class="search-button" aria-label="Search">
      <SearchIcon/>
      </button>
      </div>
    );
  };
  
  export default Datecomp;
  