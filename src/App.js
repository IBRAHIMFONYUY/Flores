import React, { useState } from 'react'
import { Routes, Route  } from 'react-router-dom'

import MainNavBar from './components/main-navbar'
import Landingpage from './components/landing-page'   
import Searchbar from './components/searchbar' 
import Service from './components/service'
import Sidebar from './components/side-bar'

import hero from "./Icon/hero.jpg"



const App = () => {
  const[sidebar, setsidebar]=useState(false)

  const togglesidebar=()=>{
    setsidebar(!sidebar)
  }
  document.body.addEventListener('load',()=>{
    return(
      <div className='loader'>
      <div className="load"></div>
      <div className="logo">BUS</div>
      </div>
    )
  })
  
 
  return (
    <div>
      <MainNavBar togglesidebar={togglesidebar} sidebar={sidebar}/>
      <Sidebar sidebar={sidebar}/>
      <main>
      <section>
     
      <div className="intro">
        <div className="smallintro">
          Get your bus tickets
        </div>
        <div className="bigintro">
          Find Best Bus For You!
        </div>
      </div>
      <Searchbar/>
      {/* <div className="hero" style={{
        backgroundImage:`url(${hero})`
      }}>
        hero
      </div> */}
      <div className='hero'>
        <img style={{
          height:'400px',
          width:'81.5%',
          mixBlendMode:'multiply'
          
        }} src={hero} alt="" srcSet="" />
      </div>

      </section>
      <section>

        <Service/>
      </section>
      </main>

    </div>
  )
}

export default App