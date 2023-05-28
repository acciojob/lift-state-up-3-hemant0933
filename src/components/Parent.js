import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [select,setSelected] =  useState(false);

    const handleClick = (option) => {
        setSelected(option);
    }
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <Child1 handleClick={handleClick}/>
      <Child2 handleClick={handleClick}/>
      <p>Selected Option: {select}</p>
    </div>
  );
}

export default Parent;
