import React, { useState } from 'react';

const WithCounter = (WrappedComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1);
    };
    return (
      <WrappedComponent count={count} incrementCounter={handleIncrement} />
    );
  };
  return <NewComponent />;
};
export default WithCounter;
