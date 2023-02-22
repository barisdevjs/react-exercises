import React, { useState, useMemo } from 'react';

function SortedList({list,sortF}) {
    const sortedList = useMemo(() => [...list].sort(sortF), [list,sortF]);
    return (
        <div>Sorted &nbsp;&nbsp;&nbsp;{sortedList.join(',   ')}</div>
    )
}

function App() {
  const [numbers] = useState([10, 20, 30]);
  const [names] = useState(['John', 'Sally', 'Riley', 'Kevin']);
  const [randomChars] = useState(['v','f','a','c','q']);

  const total = useMemo(() => numbers.reduce((acc, val) => acc + val, 0), [numbers]);

  const sorter = (a, b) => a.localeCompare(b) * -1;

  return (
    <div>
      <div>Total : {total}</div>
      <div>Names &nbsp;&nbsp;&nbsp;{names.join(',   ')}</div>
      <SortedList list={names} />
      <SortedList list={randomChars} sortF={sorter} />
    </div>
  )
}

export default App 