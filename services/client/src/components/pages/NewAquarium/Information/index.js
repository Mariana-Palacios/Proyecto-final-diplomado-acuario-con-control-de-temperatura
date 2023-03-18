import React from 'react';
import { Outlet, Link } from "react-router-dom";
import handleBolean from '../../../utils/handleBolean';
import SelectionItem from '../../../utils/SelectionItem';

const Information = () => {
    return (
      <div className='NewAquarium flex flex-j-c flex-a-i flex-f-d-c'>
        <h1>AquariumName</h1>
        <SelectionItem />
        <Link to="/NewAquarium/Data"><button className='btn'>Next</button></Link>
        <Outlet/>
      </div>
    );
}

export default Information