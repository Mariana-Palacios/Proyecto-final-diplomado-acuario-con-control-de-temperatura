import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//React Icons
import { RiPlantFill } from 'react-icons/ri';
import { FaFish, FaTemperatureLow } from 'react-icons/fa';
import { GiTurtle } from 'react-icons/gi';

// Components
import SelectionItem from '../../utils/SelectionItem';

//icons
const iconLogo = [
  //<FaTemperatureLow />, //Temperature
  <FaFish />, //Fish
  <GiTurtle />, //Turtle,
  <RiPlantFill /> //Plant
];

const dataValues = ['fish', 'other', 'plant']

const Data = ({decreaseValue}) => {
  const [valor, setValor] = useState({'fish': 0, 'other':0, 'plant': 0})
  //avoid negative numbers and handleChange in input
  const handleChange = (key, event) => {
    const newValue = event.target.value;
    const nuevosValores = {...valor};
    nuevosValores[key] = newValue === '' ? 0 : parseInt(newValue);
    newValue > 0 ? (nuevosValores[key] = parseInt(newValue)) : (nuevosValores[key] = 0);
    setValor(nuevosValores);
  };
  //increase and decrease input and avoid negative values
  const increaseDecreaseButton = (index, changer, event) =>{
    event.preventDefault(); // prevent form submission
    const auxiliarArray = {...valor}
    changer ? auxiliarArray[dataValues[index]] += 1 : auxiliarArray[dataValues[index]] > 0 && (auxiliarArray[dataValues[index]] -= 1);
    setValor(auxiliarArray)
    console.log(auxiliarArray)
  }
  //get y post 
  const [put, setPut] = useState(null);

  const createPut=(e)=> {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/aquarium_data/`, {'fish':1,'other':2,'plant':3})
      .then((response) => {
        setPut(response.data);
      });
  }
  //if (!post) return "No post!"

  return (
    //onSubmit={(e)=>handleSubmit(valor,'measuraments')}
    <form onSubmit={(e)=>createPut(e)} className="NewAquarium flex flex-j-c flex-a-i flex-f-d-c" >
      {iconLogo.map((logo, index) => (
        <SelectionItem
          key={index}
          id={index}
          icon={logo}
          valor={valor[dataValues[index]]}
          handleChange={(event) => handleChange(dataValues[index], event)}
          increase={(e)=>increaseDecreaseButton(index, true, e )}
          decrease={(e)=>increaseDecreaseButton(index, false, e)}
        />
      ))}
      <div className='flex'>
        <button onClick={decreaseValue} className='btn'>Back</button>
        <Link to="/Aquarium"><button className='btn'>Next</button></Link>
      </div>
    </form>
  );
};

export default Data;
