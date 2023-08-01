import React from 'react';
import WithCounter from './WithCounter';

const HoverIncrease = ({ count, incrementCounter }) => {
  return (
    <>
      <div> count is {count}</div>
      <button onMouseOver={incrementCounter}> Hover increase</button>
    </>
  );
};

export default WithCounter(HoverIncrease);
