import { useState } from 'react';
import './App.css';



function App() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); //sync function
    console.log(count);

  }

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  }



  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      
      
    </div>
  );
}

export default App;
