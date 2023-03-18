import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

//React Icons
import { RiPlantFill, RiTimerLine } from 'react-icons/ri';
import { FaFish, FaTemperatureLow } from 'react-icons/fa';
import { GiTurtle } from 'react-icons/gi';
import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';

// Functions
import SelectionItem from '../../../utils/SelectionItem';
import handleRequest from '../../../utils/handleRequest';

//icons
const iconLogo = [
  <FaTemperatureLow />, //Temperature
  <FaFish />, //Fish
  <RiPlantFill />, //Plant
  <GiTurtle />, //Turtle
];

const dataValues = ['temperature', 'fish', 'plant', 'other']

const ShowData = () => {
  const [valor, setValor] = useState({"temperature": 0, "fish": 0, "plant": 0, "other":0})
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
  const [post, setPost] = useState(null);

  const createPost=(e)=> {
    e.preventDefault()
    axios
      .post(`http://localhost:8000/measurament`, valor)
      .then((response) => {
        setPost(response.data);
      });
  }
  //if (!post) return "No post!"

  return (
    //onSubmit={(e)=>handleSubmit(valor,'measuraments')}
    <form onSubmit={(e)=>createPost(e)} className="NewAquarium flex flex-j-c flex-a-i flex-f-d-c" >
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
      <button  className='btn'>Next</button>
      {console.log(post)}
    </form>
  );
};

export default ShowData;
