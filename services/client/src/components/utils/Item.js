import React, { useState, useEffect } from 'react';


const Item = ({ id, icon, valor}) => {
  return (
    <div className="Item" id={id}>
      <div className={`Item__icon flex flex-j-c flex-a-i `}>{icon}</div>
      <div className="box flex flex-j-c flex-a-i">
        <p>{valor}</p>
      </div>
    </div>
  );
};

export default Item;
