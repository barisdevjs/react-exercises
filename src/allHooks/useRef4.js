import React, { useEffect, useRef, useState} from "react";

export default function App() {
  const [name, setName] = useState('');
  const prevInfo = useRef('')

  useEffect(() => {
    prevInfo.current = name;
  }, [name])
console.log('name', name, 'prevInfo', prevInfo.current)
  return (
    <>
  <input type="text" placeholder="Search" value={name} onChange={ e=> setName(e.target.value)} />
  <p>My name is {name.toLocaleUpperCase()} and my previous info is {prevInfo.current.toLocaleLowerCase()}</p>
    </>
  )
}