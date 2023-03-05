import React, { useState, useEffect } from 'react';

//React Icons
import { RiPlantFill, RiTimerLine } from 'react-icons/ri';
import { FaFish, FaTemperatureLow } from 'react-icons/fa';
import { GiTurtle } from 'react-icons/gi';
import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';

// Functions
import SelectionItem from '../../utils/SelectionItem';

//icons
const iconLogo = [
  <RiTimerLine />, //Timer
  <FaTemperatureLow />, //Temperature
  <FaFish />, //Fish
  <RiPlantFill />, //Plant
  <GiTurtle />, //Turtle
];

const ShowData = () => {
  const [valor, setValor] = useState([0, 0, 0, 0, 0])
  const handleChange = (index, event) => {
    const newValue = event.target.value
    const nuevosValores = [...valor];
    nuevosValores[index] = newValue=='' ? 0 : parseInt(newValue)
    newValue>0 ? nuevosValores[index] = parseInt(newValue) : nuevosValores[index] = 0
    setValor(nuevosValores)
  };
  const increaseDecreaseButton = (index, changer) =>{
    const auxiliarArray = [...valor]
    changer ? auxiliarArray[index] += 1 : auxiliarArray[index] > 0 && (auxiliarArray[index] -= 1);
    //changer ? auxiliarArray[index] += 1 : (auxiliarArray[index] === 0 ? 0 : auxiliarArray[index] -= 1)
    setValor(auxiliarArray)
    console.log(auxiliarArray)
  }
  return (
    <div className="showData">
      {iconLogo.map((logo, index) => (
        <SelectionItem
          key={index}
          id={index}
          icon={logo}
          iconUp={<RxTriangleUp />}
          iconDown={<RxTriangleDown />}
          valor={valor[index]}
          handleChange={(event) => handleChange(index, event)}
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
