import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import { AiOutlineMail } from 'react-icons/ai';
import { IoFishOutline } from 'react-icons/io';

//images
import newAquarium from './newAquarium.svg';

const Name = ({increaseValue, decreaseValue}) => {
  const [nombreAcuario, setNombreAcuario] = useState('')
  const [emailAcuario, setEmailAcuario] = useState('')

  const [post, setPost] = useState(null);
  const createPost=(e)=> {
    e.preventDefault()
    axios
      .post(`http://localhost:8000/aquarium_data/`, {'name':nombreAcuario, 'gmail':emailAcuario})
      .then((response) => {
        setPost(response.data);
      });
  }
  //if (!post) return "No post!"

  const handleInputChange = (option,e) => {
    const inputText = e.target.value;
    if (option==true){
      setNombreAcuario(inputText)
    }
    else{
      setEmailAcuario(inputText)
    }

  }  

  
  return (
    <form onSubmit={(e)=>createPost(e)} className='NewAquarium NewAquarium__Data flex flex-j-s-b flex-a-i flex-f-d-c'>
      <h1>New aquarium</h1>
      <img
          src={newAquarium}
          alt='aquarium'
          className='NewAquarium__Data-img'
      />
      <p className='NewAquarium__Data-p'>Type the name of your aquarium</p>
      <input
        type="text"
        id='1'
        name="input-numerico"
        className='inputStyle'
        onChange={(e)=>handleInputChange(true,e)}
      />
      <p className='NewAquarium__Data-p'>Type your email</p>
      <div className='flex'>
        <AiOutlineMail />
        <input
          type="email"
          id='2'
          name="input-numerico"
          className='inputStyle'
          onChange={(e)=>handleInputChange(false,e)}
        />
      </div>
      <div className='flex'>
        <button onClick={decreaseValue} className='btn'>Back</button>
        <button onClick={increaseValue} className='btn'>Next</button>
      </div>
      
    </form>
  );
}

export default Name