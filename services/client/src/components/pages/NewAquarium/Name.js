import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import { AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai';

//images
import newAquarium from './newAquarium.svg';

const Name = ({increaseValue, decreaseValue}) => {
  const [nombreAcuario, setNombreAcuario] = useState('')
  const [emailAcuario, setEmailAcuario] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const [mensajeErrorNombre, setmensajeErrorNombre] = useState('')
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
      if (/^\S+@\S+\.\S+$/.test(inputText)) {
        setEmailAcuario(inputText)
      }
    }
  }  
  const handleValues = () =>{
    if(nombreAcuario == ''){
      setmensajeErrorNombre('Ingrese nombre de acuario')
    }else{
      setmensajeErrorNombre('')
    }
    if(emailAcuario == ''){
      setMensajeError('Email no valido')
    }
    else{
      setMensajeError('')
    }
    if(nombreAcuario != '' & emailAcuario != ''){
      increaseValue()
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
      <p className='NewAquarium__Data-p'>{mensajeErrorNombre}</p>
      <div className='NewAquarium__Data-input flex'>
        <AiOutlineUserAdd className='NewAquarium__Data-icon'/>
        <input
          type="text"
          id='1'
          placeholder='Aquarium name'
          name="input-numerico"
          className='inputStyle'
          onChange={(e)=>handleInputChange(true,e)}
        />
      </div>
      <p className='NewAquarium__Data-p'>{mensajeError}</p>
      <div className='NewAquarium__Data-input flex'>
        <AiOutlineMail className='NewAquarium__Data-icon'/>
        <input
          type="email"
          id='2'
          placeholder='Email'
          name="input-numerico"
          className='inputStyle'
          onChange={(e)=>handleInputChange(false,e)}
        />
      </div>
      <div className='flex'>
        <button onClick={decreaseValue} className='btn'>Back</button>
        <button onClick={handleValues} className='btn'>Next</button>
      </div>
      
    </form>
  );
}

export default Name