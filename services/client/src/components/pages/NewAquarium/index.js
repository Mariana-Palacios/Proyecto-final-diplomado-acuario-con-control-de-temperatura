import React, {useState, useEffect} from 'react';

import corner from './corner.svg';

//componentes
import Information from './Information';
import Data from './Data';
import Name from './Name';

const NewAquarium = () => {
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
    
      setTimeout(() => {}, 1500)   
    return (
      <div className='NewAquariumMain flex flex-j-c flex-a-i '>
        <div className={`wave ${classChanger} `}></div>
        <img
          src={corner}
          alt='corner'
          className='corner corner-1'
        />
        {stateChanger == 0? <Information increaseValue={()=>handleClick(true)}/>:stateChanger == 1 ? <Name increaseValue={()=>handleClick(true)} decreaseValue={()=>handleClick(false)} />: <Data decreaseValue={()=>handleClick(false)}/>}
        <img
          src={corner}
          alt='corner'
          className='corner corner-2'
        />
      </div>
    );
}

export default NewAquarium