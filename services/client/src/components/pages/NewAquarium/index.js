import React, {useState, useEffect} from 'react';
import corner from './corner.svg';

const NewAquarium = ({components}) => {
    const [stateChanger, setStateChanger] = useState(0) 
    const [classChanger, setClassChanger] = useState('wave-stop') 
    const handleClick = (increaseDecrease) => {
      setClassChanger('wave-changer');
      setTimeout(() => {
        //setClassChanger('');
        increaseDecrease == true ? setStateChanger(stateChanger + 1): setStateChanger(stateChanger -1)
        setTimeout(() => {
          setClassChanger('wave-stop');
        },1300)
      }, 600);
    };
    return (
      <div className='NewAquariumMain flex flex-j-c flex-a-i '>
        {components}
        <div className={`wave ${classChanger} `}></div>
        <img
          src={corner}
          alt='corner'
          className='corner corner-1'
        />
        <img
          src={corner}
          alt='corner'
          className='corner corner-2'
        />
      </div>
    );
}

export default NewAquarium