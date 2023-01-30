import { useRef, useState, useEffect } from 'react';
import * as React from 'react';
import './style.css';

function App() {
  const timerIdRef = useRef<number>(0);
  const [count, setCount] = useState<number>(0);
  const [targetCount, setTargetCount] = useState<number>(0);

  useEffect(() => {
    if (count === targetCount) {
      stopHandler();
    }

    if (count === 0) {
      stopHandler();
    }
  }, [count, targetCount]);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 100);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  const resetHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount((c) => (c = 0));
  };

  const countToNum = (number: number) => {
    setTargetCount(number);
    startHandler();
  };

  const countFromNumber = (number: number) => {
    setCount(number);
    setTargetCount(0);
    timerIdRef.current = setInterval(() => setCount((c) => c - 1), 100);
  };

  return (
    <div className="outer">
      <h3 className="innerOne">Timer: {count} s</h3>
      <div className="innerTwo">
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={() => countToNum(5)}>5</button>
        <button onClick={() => countFromNumber(10)}>10</button>
      </div>
    </div>
  );
}
export default App;
