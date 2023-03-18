import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Name = () => {
    return (
      <div className='NewAquarium flex flex-j-c flex-a-i flex-f-d-c'>
        <h1>New aquarium</h1>
        <p>Type the name of your aquarium</p>
        <input
          type="text"
          id='1'
          name="input-numerico"
          className='inputStyle'
        />
        <Link to="/NewAquarium/Information"><button>Next</button></Link>
      </div>
    );
}

export default Name