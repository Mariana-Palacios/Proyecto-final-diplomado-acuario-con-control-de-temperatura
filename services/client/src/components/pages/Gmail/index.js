import React, {useState} from 'react';
//import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import { AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

//images
import newAquarium from './newAquarium.svg';

const Name = ({increaseValue, decreaseValue}) => {
  const [nombreAcuario, setNombreAcuario] = useState('')
  const [emailAcuario, setEmailAcuario] = useState('')
  const [numberAcuario, setNumberAcuario] = useState('')
  const [mensajeErrorGmail, setMensajeErrorGmail] = useState('')
  const [mensajeErrorNombre, setmensajeErrorNombre] = useState('')
  const [mensajeErrorNumber, setmensajeErrorNumber] = useState('')
  const [post, setPost] = useState(null);
  const createPost=(e)=> {
    e.preventDefault()
    axios
      .post(`http://localhost:8000/aquarium_data/`, {'name':nombreAcuario, 'gmail':emailAcuario, 'number':numberAcuario})
      .then((response) => {
        setPost(response.data);
      });
  }
  //if (!post) return "No post!"

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    if (/^\S+@\S+\.\S+$/.test(inputText)) {
      setEmailAcuario(inputText)
    }
  }  
  const handleValues = () =>{
    nombreAcuario === ''? setmensajeErrorNombre('Ingrese nombre de acuario'):setmensajeErrorNombre('')
    emailAcuario === ''?setMensajeErrorGmail('Email no valido'):setMensajeErrorGmail('')
    numberAcuario === ''?setmensajeErrorNumber('Numero no valido'):setmensajeErrorNumber('')
    if(nombreAcuario !== '' & emailAcuario !== '' & numberAcuario!==''){
      increaseValue()
    }
  }

  return (
    <form onSubmit={(e)=>createPost(e)} className='NewAquarium NewAquarium__Data flex flex-j-s-b flex-a-i flex-f-d-c'>
      <h1>Change Email</h1>
      <img
          src={newAquarium}
          alt='aquarium'
          className='NewAquarium__Data-img'
      />
      <p className='NewAquarium__Data-p'>{mensajeErrorGmail}</p>
      <div className='NewAquarium__Data-input flex'>
        <AiOutlineMail className='NewAquarium__Data-icon'/>
        <input
          type="email"
          id='3'
          placeholder='Email'
          name="input-numerico"
          className='inputStyle'
          onChange={(e)=>handleInputChange(e)}
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