import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState({
    number : 1,
    id : 'abcd'
  });

  const incrementCount = () => {
    setCount((prev) => {
      return {
        ...prev,
        number : prev.number + 1,
      }
    }); //sync function

  }

  const decrementCount = () => {
    setCount((prev) => {
      return {
        ...prev,
        id : prev.id.split('').reverse().join('')
      }  
      });
  }

  useEffect(() => {
    console.log('Count ID Changed'); //this will be called only when id changes
  }, [count.id]);



  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count.number}</span>
      <span>{count.id}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
