import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import navItems from './nav-items';
import { Menu, X } from 'lucide-react';

const MainNavBar = ({togglesidebar, sidebar}) => {

  
  return (
    <header>
      <div className='loader'>
      <div className="load"></div>
      <div className="logo">BUS</div>
      </div>
      <nav>
        <ul>
          <div className="responsive">
        {navItems.map((items, index) =>(
          <div key={index} className='links'>
            <Link to={items.to} className='a'>{items.name}</Link>
          </div>
        ))}
        <div className='signup'> SignUp</div>
        </div>
        <div className="hamburger" style={{cursor:'pointer'}} onClick={togglesidebar}>{sidebar ? <X/>:<Menu/>}</div>
        </ul>
        
      </nav>
    </header>

  )
}

export default MainNavBar;
