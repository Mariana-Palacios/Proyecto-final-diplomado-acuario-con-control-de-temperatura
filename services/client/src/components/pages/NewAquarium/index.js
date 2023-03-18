import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NewAquarium = () => {
    return (
      <div className='NewAquarium flex flex-j-c flex-a-i flex-f-d-c'>
        <h1>Let's get started</h1>
        <div className='flex'>
          <Link to="/"><button className='btn'>Back</button></Link>
          <Link to="/NewAquarium/Name"><button className='btn'>Next</button></Link>
        </div>
        <Outlet/>
      </div>
    );
}

export default NewAquarium