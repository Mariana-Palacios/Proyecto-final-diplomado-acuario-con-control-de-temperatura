import React from 'react';
import { Outlet, Link } from "react-router-dom";

import newAquarium from './newAquarium.svg';

const Name = () => {
    return (
      <div className='NewAquarium NewAquarium__Data flex flex-j-s-b flex-a-i flex-f-d-c'>
        <h1>New aquarium</h1>
        <img
            src={newAquarium}
            alt='aquarium'
            className='NewAquarium__Data-img'
        />
        <p className='NewAquarium__Data-p'>Type the name of your aquarium</p>
        <input
          type="text"
          id='1'
          name="input-numerico"
          className='inputStyle'
        />
        <div className='flex'>
          <Link to="/NewAquarium/"><button className='btn'>Back</button></Link>
          <Link to="/NewAquarium/Information"><button className='btn'>Next</button></Link>
        </div>
      </div>
    );
}

export default Name