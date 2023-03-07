import React, { useState } from 'react';

const SelectionItem = ({ id, icon, iconUp, iconDown,  valor, handleChange, increase, decrease}) => {

  return (
    <div className="selecItem ">
      <div className="selecItem__icon flex flex-j-c flex-a-i">{icon}</div>
      <div className="selecItem__change flex">
        <input
          type="number"
          id={id}
          name="input-numerico"
          value={valor}
          className = 'box'
          onChange={handleChange}
        />
        <div className="flex flex-f-d-c">
          <button onClick={increase} className='selecItem__button'>{iconUp}</button>
          <button onClick={decrease} className='selecItem__button'>{iconDown}</button>
        </div>
      </div>
    </div>
  );
};

export default SelectionItem;
