import { useRef, useState,useEffect } from 'react';
import * as React from 'react'

function App() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const [targetCount, setTargetCount] = useState(0);

  useEffect(() => {
    if (count === targetCount) {
      stopHandler();
    }
  }, [count, targetCount]);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount(c => c + 1), 100);
  };
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  const resetHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(c => c = 0)
  };

  const countFive = (number) => {
    setTargetCount(number);
    startHandler();
  }

  return (
    <div>
      <div>Timer: {count} s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={() => countFive(5)}>5</button>

      </div>
    </div>
  );
}
export default App;
