import React, { useState, useMemo, useCallback } from 'react';

function SortedList({list,sortF}) {
    const sortedList = useMemo(() => [...list].sort(sortF), [list,sortF]);
    return (
        <div>Sorted &nbsp;&nbsp;&nbsp;{sortedList.join(',     ')}</div>
    )
}

function App() {
  const [numbers] = useState([10, 20, 30]);
  const [names] = useState(['John', 'Sally', 'Riley', 'Kevin']);
  const [randomChars] = useState(['v','f','a','c','q']);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [c,setC] = useState(1);


  const total = useMemo(() => numbers.reduce((acc, val) => acc + val, 0), [numbers]);

  const sorter = useCallback((a, b) => a.localeCompare(b) * c, [c]);
  const countTotal = count1  + count2;

  return (
    <div>
      <div>Total : {total}</div>
      <div>Names &nbsp;&nbsp;&nbsp;{names.join(',   ')}</div>
      <SortedList list={names} />
      <SortedList list={randomChars} sortF={sorter} />
      <button onClick={() => setC(c * -1)}>Set Reverse</button>
      <button onClick={() => setCount1(count1 +1)}>Count1 : {count1}</button>
      <button onClick={() => setCount2(count2 +1)}>Count2 : {count2}</button>
      <div>CountTotal : {countTotal}</div>
    </div>
  )
}

export default App 