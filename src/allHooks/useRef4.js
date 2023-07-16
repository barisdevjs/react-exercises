/* import React, { useEffect, useRef, useState } from "react";

function* idGenerator() {
  let id = 3;
  while (true) {
    yield id++;
  }
}

const idGen = idGenerator();

export default function App() {
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputRef = useRef(null);
  const [names, setNames] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);

  const onAddName = () => {
    setNames([
      ...names,
      { id: idGen.next().value, name: inputRef.current.value },
    ]);
    inputRef.current.value = "";
  };

  return (
    <>
      <input type="text" placeholder="Search" ref={inputRef} />
      <button onClick={onAddName}>Add name</button>
      <div>
        {names.map((name) => (
          <p key={name.id}>
            {name.id} - {name.name}
          </p>
        ))}
      </div>
    </>
  );
}
 */

import React, { useEffect, useRef, useState } from "react";

export default function App() {

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const [names, setNames] = useState([{id: 1, name: 'John'},{id: 2, name: 'Jane'}]);
  const idRef = useRef(2);
  const inputRef = useRef(null);

  const onAddName = () => {
    const newId = idRef.current + 1;
    setNames([...names, {id: newId, name: inputRef.current.value}]);
    idRef.current = newId;
    inputRef.current.value = '';
  }

  console.log(idRef.current)

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
      />
      <button onClick={onAddName}>Add name</button>
      <div>
        {names.map((name) => (
          <p key={name.id}>{name.id} - {name.name}</p>
        ))}
      </div>
    </>
  )
}
