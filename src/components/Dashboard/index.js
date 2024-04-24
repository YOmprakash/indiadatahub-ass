import React, { useState, useEffect } from 'react';

import { FaRegCalendar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import './index.css'
import ReactSlider from '../ReactSlider';
export default function Dashboard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => {
        clearInterval(timer);
    };
}, []);

  const TodaysDate = () => {
    
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
  
    return <div>Today, {day} {month}</div>;
  }
  return (
    <div className='dashboard-section'>
     <div className='user-container'>
      <div className='user-info-card'>
        <div className='user-bio'>
          <h2>Good Afternoon, Hassan</h2>
          <p>You are subscribed to Retail plan.</p>
        </div>
        <div className='date-time-card'>
        <div className='date-card'>
          <FaRegCalendar color='#fff' size={24} />
          {TodaysDate()}
        </div>
        <div className='time-card'>
        <IoMdTime color='#fff' size={24} />
        <div>
            {time.getHours()}:{time.getMinutes() < 10 ? '0' : ''}{time.getMinutes()}
        </div>
         
        </div>
<MdNotificationsNone color='#fff' size={24} />
        </div>
      </div>
     </div>
     <div className='saved-library-container'>
      <div className='saved-library-card'>
      <div className=' saved-library-card-info'>
      <h3>Saved Library</h3>
        <p>date</p>
      </div>
        </div>
        <div className='saved-library-card'>
      <div className=' saved-library-card-info'>
      <h3>Saved Library</h3>
        <p>date</p>
      </div>
        </div><div className='saved-library-card'>
      <div className=' saved-library-card-info'>
      <h3>Saved Library</h3>
        <p>date</p>
      </div>
        </div><div className='saved-library-card'>
      <div className=' saved-library-card-info'>
      <h3>Saved Library</h3>
        <p>date</p>
      </div>
        </div>
        <div className='saved-library-card'>
      <div className=' saved-library-card-info'>
      <h3>Saved Library</h3>
        <p>date</p>
      </div>
        </div>
        
     </div>
     <div className='slider-release-container'>
     <ReactSlider />
     <div className='release-container'>
      
     </div>
     </div>
   
    </div>
  )
}
