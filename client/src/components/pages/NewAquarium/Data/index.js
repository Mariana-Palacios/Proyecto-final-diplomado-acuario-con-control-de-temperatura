import React, { useState, useEffect } from 'react';

//React Icons
import { RiPlantFill, RiTimerLine } from 'react-icons/ri';
import { FaFish, FaTemperatureLow } from 'react-icons/fa';
import { GiTurtle } from 'react-icons/gi';
import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';

// Functions
import SelectionItem from '../../../utils/SelectionItem';
//import handleSubmit from '../../../utils/handleSubmit';

//icons
const iconLogo = [
  <RiTimerLine />, //Timer
  <FaTemperatureLow />, //Temperature
  <FaFish />, //Fish
  <RiPlantFill />, //Plant
  <GiTurtle />, //Turtle
];

const dataValues = ['time', 'temperature', 'fish', 'plant', 'turtle']

const ShowData = () => {
  const [valor, setValor] = useState({'time':0, 'temperature': 0, 'fish': 0, 'plant': 0, 'turtle':0})
  //avoid negative numbers and handleChange in input
  const handleChange = (key, event) => {
    const newValue = event.target.value;
    const nuevosValores = {...valor};
    nuevosValores[key] = newValue === '' ? 0 : parseInt(newValue);
    newValue > 0 ? (nuevosValores[key] = parseInt(newValue)) : (nuevosValores[key] = 0);
    setValor(nuevosValores);
  };
  //increase and decrease input and avoid negative values
  const increaseDecreaseButton = (index, changer) =>{
    const auxiliarArray = {...valor}
    changer ? auxiliarArray[dataValues[index]] += 1 : auxiliarArray[dataValues[index]] > 0 && (auxiliarArray[dataValues[index]] -= 1);
    setValor(auxiliarArray)
    console.log(auxiliarArray)
  }
  return (
    //onSubmit={(e)=>handleSubmit(valor,'measuraments')}
    <div  className="NewAquarium flex flex-j-c flex-a-i flex-f-d-c">
      {iconLogo.map((logo, index) => (
        <SelectionItem
          key={index}
          id={index}
          icon={logo}
          iconUp={<RxTriangleUp />}
          iconDown={<RxTriangleDown />}
          valor={valor[dataValues[index]]}
          handleChange={(event) => handleChange(dataValues[index], event)}
          increase={()=>increaseDecreaseButton(index, true)}
          decrease={()=>increaseDecreaseButton(index, false)}
        />
      ))}
      {useEffect(() => {
        console.log(valor);
      }, [valor])}
    </div>
  );
};

export default ShowData;
