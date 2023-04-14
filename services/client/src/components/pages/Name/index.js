import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import {  AiOutlineUserAdd } from 'react-icons/ai';

//images
import newAquarium from './newAquarium.svg';

const Name = ({increaseValue, decreaseValue}) => {
  const [nombreAcuario, setNombreAcuario] = useState('')
  const [mensajeErrorNombre, setmensajeErrorNombre] = useState('')
  const [post, setPost] = useState(null);
  const createPost=(e)=> {
    e.preventDefault()
    axios
      .put(`http://52.21.250.6:8000/Name/`, {'name':nombreAcuario})
      .then((response) => {
        setPost(response.data);
      });
  }
  //if (!post) return "No post!"

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setNombreAcuario(inputText)
  }  
  const handleValues = () =>{
    nombreAcuario === ''? setmensajeErrorNombre('Ingrese nombre de acuario'):setmensajeErrorNombre('')
  }

  return (
    <form onSubmit={(e)=>createPost(e)} className='NewAquarium NewAquarium__Data flex flex-j-s-b flex-a-i flex-f-d-c'>
      <h1>Cambiar Nombre</h1>
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
          onChange={(e)=>handleInputChange(e)}
        />
      </div>
      <div className='flex'>
        <Link to="/Aquarium"><button onClick={decreaseValue} className='btn'>Back</button></Link>
        <button onClick={handleValues} className='btn'>Next</button>
      </div>
      <Outlet/>
    </form>
  );
}

export default Name