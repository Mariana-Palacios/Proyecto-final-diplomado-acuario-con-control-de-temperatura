import React from 'react';

import { Outlet, Link } from "react-router-dom";

//import handleRequest from '../../utils/handleRequest';

import '../../styles/styles.css'

//images

import logo from './logo.svg'
import wave1 from './wave1.svg'
import wave2 from './wave2.svg'
import wave3 from './wave3.svg'
//import background from './background.svg'

const Main = () => {
  return (
    <main className="main">
      {/*<h1>{handleRequest('/','', 'get')}</h1>*/}
      {console.log()}
      <div className='text flex flex-j-c flex-a-i flex-f-d-c'>
        <img
          src={logo}
          alt='logo'
          className='bigLogo' 
        />
        <h1 className='text__title'>Maintain the perfect aquarium <br/>temperature with ease.</h1>
        <Link to="/Aquarium"><button className='text__button'>Ir al dashboard</button></Link>
      </div>
      <img 
        src={wave1}
        alt='wave1'
        className='wave wave-1' 
      />
      <img 
        src={wave2}
        alt='wave2'
        className='wave wave-2' 
      />
      <img 
        src={wave3}
        alt='wave3'
        className='wave wave-3' 
      />
      <Outlet />
    </main>
  )
}

export default Main;