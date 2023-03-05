import React, { useState } from 'react';

const SelectionItem = ({ id, icon, iconUp, iconDown,  valor, handleChange, increase, decrease}) => {

  return (
    <div className="selecItem">
      <div className="selecItem__icon">{icon}</div>
      <div className="selecItem__change flex">
        <input
          type="number"
          id={id}
          name="input-numerico"
          value={valor}
          onChange={handleChange}
        />
        <div className="flex flex-f-d-c">
          <button onClick={increase}>{iconUp}</button>
          <button onClick={decrease}>{iconDown}</button>
        </div>
      </div>
    </div>
  );
};

export default SelectionItem;
