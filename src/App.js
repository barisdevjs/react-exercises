import React, {useEffect, useRef, useState} from "react";

export default function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log(name)
    }, [name]);

  return (
    <>
  <input type="text" placeholder="Search" value={name} onChange={ e=> setName(e.target.value)} />
  <p>My name is {name}</p>
  <p>I rendered {renderCount.current} times</p>
    </>
  )
}