import React from 'react';

const Child2 = ({handleClick}) => {
  return (
    <div className='child'>
      <h2>Child Component 2</h2>
      <button onClick={() => handleClick('Option 2')}>Option 2</button>
    </div>
  );
}

export default Child2;
