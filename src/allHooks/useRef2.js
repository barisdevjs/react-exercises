import { useRef, useState } from 'react';

function Stopwatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const startHandler = () => {
    if (timerIdRef.current) { 
      return;
     }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 100);
  };
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  return (
    <div>
      <div>Timer: {count} s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <p>{timerIdRef.current}</p>
      </div>
    </div>
  );
}
export default Stopwatch;