import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'; 

//import icons

import { RiPlantFill, RiTimerLine } from 'react-icons/ri';
import { FaFish, FaTemperatureLow } from 'react-icons/fa';
import { GiTurtle } from 'react-icons/gi';
import { BsFillFileBarGraphFill} from 'react-icons/bs'

//Components 
import Item from '../../utils/Item';

const Aquarium = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
      axios.get(`http://localhost:8000/measurament/`).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
    //<FaTemperatureLow />, //Temperature
    const iconLogo = [
        <FaFish />, //Fish
        <RiPlantFill />, //Plant
        <GiTurtle />, //Turtle
    ]

    const items = ['Fish','Plant','Other']
    
    return (
      <div className='Aquarium flex flex-j-c flex-a-i flex-f-d-c'>
        <h1>AquariumName</h1>
        <div className='flex'>
          <section className='flex flex-j-c flex-a-i flex-f-d-c'>
            <div className='Aquarium__temperature Aquarium__section flex flex-j-c flex-a-i flex-f-d-c'>
              <div className='flex'>
                <div className='Item__icon Item__icon-1'>
                  <FaTemperatureLow />
                </div>
                <h2>Temperature</h2>  
              </div>
              <h3 className='Aquarium__temperature-h3'>{`${post[post.length-1]['Temperature']}°`}</h3>
            </div>
            <div className='flex flex-j-s-b'>
                {iconLogo.map((logo, index) => (
                    <Item
                        key={index}
                        id={index} 
                        icon={logo}
                        valor={post[post.length-1][items[index]]}
                    />
                ))}
            </div>
          </section>
          <section className='Aquarium__graphics Aquarium__section flex flex-j-c flex-a-i flex-f-d-c'>
            <div className='flex flex-j-c flex-a-i'>
              <div className='Item__icon Item__icon-1'><BsFillFileBarGraphFill /></div>
              <h2>Graphics</h2>
            </div>
          </section>
        </div>
        {console.log(post[post.length-1]['Fish'])}
        <Link to="/NewAquarium/Data"><button className='btn'>Back</button></Link>
        <Outlet/>
      </div>
    );
}

export default Aquarium