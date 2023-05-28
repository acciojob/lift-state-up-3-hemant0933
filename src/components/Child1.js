import React from 'react';

const Child1 = ({handleClick}) => {
  return (
    <div className='child'>
      <h2>Child Component 1</h2>
      <button onClick={() => handleClick('Option 1')}>Option 1</button>
    </div>
  );
}

export default Child1;
