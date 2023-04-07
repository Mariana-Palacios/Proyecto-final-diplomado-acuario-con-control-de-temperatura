import React, {useState, useEffect, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'; 

//import icons

import { RiPlantFill } from 'react-icons/ri';
import { FaFish, FaTemperatureLow } from 'react-icons/fa';
import { GiTurtle, GiWaterDrop, GiFishEscape } from 'react-icons/gi';
import { BsFillFileBarGraphFill} from 'react-icons/bs'
import { AiFillThunderbolt } from "react-icons/ai";

//

//Components 
import Item from '../../utils/Item';

const Aquarium = () => {
  const [post, setPost] = useState(null);
  const [nxpValues, setNxpValues] = useState(null);
  const [cambioMedida, setCambioMedida] = useState(1);
    //iframe
  const iframeRef = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/aquarium_data/`).then((response) => {
      setPost(response.data);
    });
    axios.get(`http://localhost:8000/nxp_data/`).then((response) => {
      setNxpValues(response.data);
    });
  }, []);


  if (!nxpValues) return null;
  if (!post) return null;
  //<FaTemperatureLow />, //Temperature
  const iconLogo = [
      <FaFish />, //Fish
      <RiPlantFill />, //Plant
      <GiTurtle />, //Turtle
  ]

  const items = ['fish','plant','other']

  return (
    <div className='Aquarium flex flex-j-c flex-a-i flex-f-d-c'>
      {console.log(post[post.length-1]['name'])}
      {console.log(post)}
      <h1>{post[post.length-1]['name']}<GiFishEscape /></h1>
      <div className='container flex'>
        <section className='flex flex-j-c flex-a-i flex-f-d-c'>
          <div className='flex flex-j-c flex-a-i Aquarium__section'>
            <button className='flex btn' onClick={()=>setCambioMedida(1)}>Agua<GiWaterDrop/></button>
            <button className='flex btn' onClick={()=>setCambioMedida(2)}>Ambiente<FaTemperatureLow/></button>
            <button className='flex btn' onClick={()=>setCambioMedida(3)}>Potencia<AiFillThunderbolt/></button>
          </div>
          <div className='Aquarium__temperature Aquarium__section flex flex-j-c flex-a-i flex-f-d-c'>
            <div className='flex'>
              <div className='Item__icon Item__icon-1'>
                {cambioMedida ==1?<GiWaterDrop/>:cambioMedida==2?<FaTemperatureLow/>:<AiFillThunderbolt/>}
              </div>
              <h2>{cambioMedida ==1?'Agua':cambioMedida==2?'Ambiente':'Potencia'}</h2>  
            </div>
            {cambioMedida ==1?<iframe src="http://52.21.250.6:3001/d-solo/2BkgaefVz/heat-dashboard?orgId=1&refresh=5s&theme=light&panelId=2" width="450" height="200" frameborder="0"></iframe>:cambioMedida==2?<iframe src="http://52.21.250.6:3001/d-solo/2BkgaefVz/heat-dashboard?orgId=1&refresh=5s&theme=light&panelId=6" width="450" height="200" frameborder="0"></iframe>:<iframe src="http://52.21.250.6:3001/d-solo/2BkgaefVz/heat-dashboard?orgId=1&refresh=5s&theme=light&panelId=8" width="450" height="200" frameborder="0"></iframe>}
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
      <Link to="/NewAquarium/"><button className='btn'>Back</button></Link>
      <Outlet/>
    </div>
  );
}

export default Aquarium