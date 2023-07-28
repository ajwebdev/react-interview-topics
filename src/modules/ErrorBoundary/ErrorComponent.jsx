import React, { useEffect, useState } from 'react';

const ErrorComponent = () => {
  const [state, setState] = useState(0);
  const handleClick = () => {
    console.log('deno');

    setState(state + 1);
  };
  useEffect(() => {
    if (state === 4) {
      console.log('deno');
      throw new Error('something went wrong');
    }
  }, []);

  return <button onClick={handleClick}>Button</button>;
};
export default ErrorComponent;
