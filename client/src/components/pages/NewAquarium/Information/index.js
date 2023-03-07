import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Information = () => {
    return (
      <div className='NewAquarium flex flex-j-c flex-a-i flex-f-d-c'>
        <h1>Let's get started</h1>
        <Link to="/NewAquarium/Data"><button>Next</button></Link>
        <Outlet/>
      </div>
    );
}

export default Information