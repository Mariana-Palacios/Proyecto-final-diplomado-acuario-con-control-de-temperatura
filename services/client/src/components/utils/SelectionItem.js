import React, { useState, useEffect } from 'react';

import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';

const SelectionItem = ({ id, icon, valor, handleChange, increase, decrease, classChanger=false}) => {
  return (
    <div className="selecItem ">
      <div className={`selecItem__icon flex flex-j-c flex-a-i ${classChanger==false?'':'selecItem__icon-active'}`}>{icon}</div>
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
          <button onClick={increase} className='selecItem__button'>{<RxTriangleUp />}</button>
          <button onClick={decrease} className='selecItem__button'>{<RxTriangleDown />}</button>
        </div>
      </div>
    </div>
  );
};

export default SelectionItem;
