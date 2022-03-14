import React, { useRef, useState} from "react";

export default function App() {
  const [name, setName] = useState('');
  const inputRef = useRef()

  function focus(){
    inputRef.current.focus();
    inputRef.current.value = 'manual entering';
  }

  return (
    <>
  <input type="text" placeholder="Search" value={name} ref={inputRef} onChange={ e=> setName(e.target.value)} />
  <p>My name is {name}</p>
  <button onClick={focus}>Focus</button>
    </>
  )
}