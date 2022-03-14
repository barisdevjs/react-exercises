import React, { useEffect } from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countSecond, setCountSecond] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // ✅ This doesn't depend on `count` variable outside
    }, 10);

    const sec = setInterval(() => {
      setCountSecond(c => c + 1); // ❌ This depends on `count` variable outside
    } , 1000); 
    return () => clearInterval(sec , id);
  }, []);
 // ✅ Our effect doesn't use any variables in the component scope

  return <h1> Second {countSecond} : Milisecond {count}</h1>;
}

export default Counter;
