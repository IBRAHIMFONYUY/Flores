import React from 'react'
import { Link } from 'react-router-dom'

import navItems from './nav-items'

const Sidebar = ({sidebar}) => {
  return (

    <div className={`side-bar ${sidebar ? 'open':'close'}`}>
        <div className="logo">BUS</div>
        <hr style={{width:'100%'}}/>
            {navItems.map((items, index) =>(
          <div key={index} className='links'>
            <Link to={items.to} className='a'>{items.name}</Link>
          </div>
        ))}
        <div className='signup'> SignUp</div>
    </div>
  )
}

export default Sidebar