import React, { useEffect, useState } from 'react';

const ErrorComponent = () => {
  const [state, setState] = useState(0);
  const handleClick = () => {
    console.log('deno');

    setState(state + 1);
  };
  useEffect(() => {
    console.log('state', state);
    if (state === 2) {
      console.log('deno');
      throw new Error('');
    }
  }, [state]);

  return <button onClick={handleClick}>Button1</button>;
};
export default ErrorComponent;
