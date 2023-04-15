import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

//images
import newAquarium from './newAquarium.svg';
import qr from './qr.png'

const Name = ({increaseValue, decreaseValue}) => {
  const [numberAcuario, setNumberAcuario] = useState('')
  const [mensajeErrorNumber, setmensajeErrorNumber] = useState('')
  const [hide, setHide] = useState(true)
  const [post, setPost] = useState(null);
  const createPost=(e)=> {
    e.preventDefault()
    axios
      .put(`http://52.21.250.6:8000/Number/`, {'number':numberAcuario})
      .then((response) => {
        setPost(response.data);
      });
  }
  //if (!post) return "No post!"

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    if( /^3[0-9]{9}$/.test(inputText)){
      setNumberAcuario(`+57${inputText}`)
    }

  }  
  const handleValues = () =>{
    numberAcuario === ''?setmensajeErrorNumber('Numero no valido'):setmensajeErrorNumber('')
  }

  return (
    <form onSubmit={(e)=>createPost(e)} className='NewAquarium NewAquarium__Data flex flex-j-s-b flex-a-i flex-f-d-c'>
      <aside className={`NewAquarium__Aside ${hide?'':'hide'}`}>
        <button className='NewAquarium__Aside-close'><AiOutlineClose/></button>
        <h1 className='NewAquarium__Aside-title'>ESCANEA QR</h1>
        <img src={qr} className='NewAquarium__Aside-img'/>
        <p className='NewAquarium__Aside-p'>Link chat recibir mensajes</p>
        <button className='NewAquarium__Aside-btn btn'>Link</button>
      </aside>
      <h1>New aquarium</h1>
      <img
          src={newAquarium}
          alt='aquarium'
          className='NewAquarium__Data-img'
      />
      <p className='NewAquarium__Data-p'>{mensajeErrorNumber}</p>
      <div className='NewAquarium__Data-input flex'>
        <BsTelephone className='NewAquarium__Data-icon'/>
        <input
          type="text"
          id='2'
          placeholder='Number'
          name="input-numerico"
          className='inputStyle'
          onChange={(e)=>handleInputChange(e)}
        />
      </div>
      <div className='flex'>
        <Link to="/Aquarium"><button className='btn'>Back</button></Link>
        <button onClick={handleValues} className='btn'>Next</button>
      </div>
      <Outlet />
    </form>
  );
}

export default Name