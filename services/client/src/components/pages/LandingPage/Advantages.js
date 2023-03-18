import React from 'react';

import '../../styles/styles.css'
import { FaTemperatureHigh, FaFish} from 'react-icons/fa';
import { BsFileBarGraphFill } from "react-icons/bs";

const Adventages = () => {
  const iconsLogo = [ <FaTemperatureHigh/>, <FaFish/>, <BsFileBarGraphFill/>] 
  const text = ['parla1', 'parla2', 'parla3']

  return (
    <section className="adventages flex flex-j-c flex-a-i">
        <h1 className='adventages__title'>Advantages</h1>
        <div className='adventages__backgroundLine'></div>
        {iconsLogo.map((iconLogo,index)=>{
            return <div className={`adventage adventage-${index+1}`} key={index}>
                <div className='adventage__icon flex flex-j-c flex-a-i'><i>{iconLogo}</i></div>
                <p  className='adventage__text'>{text[index]}</p>
            </div>
        })}
    </section>
  )
}

export default Adventages;