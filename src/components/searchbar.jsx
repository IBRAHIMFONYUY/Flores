import React from 'react'
import { MapPin, CalendarClock, Search } from 'lucide-react'

const Searchbar = () => {
  return (
    <div className="searchbar">
    <div className='searchbars'>
        <div className="inputs">
            <input type="text" name="" id="" placeholder='------'/>
            <div className='icon'><MapPin/></div>
        </div>
        <div className="inputs">
            <input type="text" name="" id="" placeholder='------'/>
            <div className='icon'><MapPin/></div>
        </div>
        <div className="inputs">
            <input type="date" name="" id="" />
            
        </div>
        <button className="search-btn"><span><Search/></span> Search </button>
    </div>
    </div>
  )
}

export default Searchbar;