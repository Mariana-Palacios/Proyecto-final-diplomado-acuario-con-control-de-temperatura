import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

const Information = ({increaseValue}) =>{
  return (
    <div className='NewAquarium flex flex-j-c flex-a-i flex-f-d-c'>
      <h1>Let's get started</h1>
      <Link to="/Aquarium"><button className='btn'>Go to dashboard</button></Link>
      <div className='flex'>
        <Link to="/"><button className='btn'>Back</button></Link>
        <button onClick={increaseValue} className='btn'>Next</button>
      </div>
    </div>
  );
};

export default Information;