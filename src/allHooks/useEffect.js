import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState({
    number: 1,
    id: 'abcd'
  });

  const incrementCount = () => {
    setCount((prev) => {
      return {
        ...prev,
        number: prev.number + 1,
      }
    }); //sync function
  }

  useEffect(() => {
    console.log('Count changed'); // whenever count changes this will be called in the console
  }, [count]);

  useEffect(() => {
    console.log('Called for first Time'); // if there is no dependency array, it will be called only once
  }, []);


     useEffect(() => {
    setCount( {
      number : 1,
      id : 'Random Number' // it is used for a default setting
      }
    );
  }, [count.id]);
    




  const decrementCount = () => {
    setCount((prev) => {
      return {
        ...prev,
        id : prev.id.split('').reverse().join('')
      }  
      });
  }



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
