import React from 'react';
// import WithCounter from './WithCounter';

const ClickIncrease = ({ count, incrementCounter }) => {
  return (
    <>
      <div> count is {count}</div>
      <button onMouseOver={incrementCounter}> Click increase</button>
    </>
  );
};

export default ClickIncrease;
