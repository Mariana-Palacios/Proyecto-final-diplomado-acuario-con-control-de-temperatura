import React from 'react';

import { Outlet, Link } from "react-router-dom";

import GetData from '../../utils/GetData';

import '../../styles/styles.css'
import logo from './logo.svg'

const Main = () => {
  return (
    <main className="main">
      <GetData apiPathName='' />
      <div className='text flex flex-j-c flex-a-i flex-f-d-c'>
        <img
          src={logo}
          alt='logo'
          className='bigLogo' 
        />
        <h1 className='text__title'>Maintain the perfect aquarium <br/>temperature with ease.</h1>
        <Link to="/NewAquarium"><button className='text__button'>Get started</button></Link>
      </div>
      <Outlet />
    </main>
  )
}

export default Main;