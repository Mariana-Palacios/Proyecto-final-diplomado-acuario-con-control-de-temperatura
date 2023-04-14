import React, {useState, useEffect, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'; 

//import icons

import { RiPlantFill } from 'react-icons/ri';
import { FaFish, FaTemperatureLow } from 'react-icons/fa';
import { GiTurtle, GiWaterDrop, GiFishEscape } from 'react-icons/gi';
import { BsFillFileBarGraphFill} from 'react-icons/bs'
import { AiFillThunderbolt, AiOutlineClose } from "react-icons/ai";
import { TbTool } from "react-icons/tb";


//Images
import waves from './waves.svg'


//Components 
import Item from '../../utils/Item';

const Aquarium = () => {
  const [post, setPost] = useState(null);
  const [nxpValues, setNxpValues] = useState(null);
  const [cambioMedida, setCambioMedida] = useState(1);
  const [aside, setAside] = useState(false);
    //iframe
  const iframeRef = useRef(null);

  useEffect(() => {
    axios.get(`http://52.21.250.6:8000/aquarium_data/`).then((response) => {
      setPost(response.data);
    });
    axios.get(`http://52.21.250.6:8000/nxp_data/`).then((response) => {
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
      <aside className={`Aquarium__aside flex flex-j-c flex-a-i  ${aside?'':'hide'}`}>
        <div className={`Aside flex flex-j-c flex-a-i flex-f-d-c `}>
          <button onClick={()=>setAside(!aside)} className={`Aside__close`}> <AiOutlineClose /></button>
          <h2 className='Aside__p'>Modificar</h2>
          <ul>
            <Link to="/Name"><li>Nombre</li></Link>
            <Link to="/Data"><li>Organismos</li></Link>
            <Link to="/Number"><li>Numero</li></Link>
            <Link to="/Gmail"><li>Gmail</li></Link>
          </ul>
        </div>
      </aside>
      <button onClick={()=>setAside(!aside)} className='Aquarium__tool'><TbTool/>Modificar</button>
      <h1>{post['name']}<GiFishEscape /></h1>
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
                      valor={post[items[index]]}
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
      <div className={`wave ${aside?'wave-changer':'wave-stop'}`}></div>
      <img src={waves} className='waterDashboard'/>
      <Link to="/"><button className='btn'>Back</button></Link>
      <Outlet/>
    </div>
  );
}

export default Aquarium