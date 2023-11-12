import React, { useState, useMemo } from 'react';

function SortedList({ list, sortF, c }) {
    const sortedList = useMemo(() => [...list].sort(sortF), [list, sortF]);
    const sortValue = c === -1 ? "Reverse" : "Normal"
    return (
        <div>
            Sorted {sortValue} &nbsp;&nbsp;&nbsp;{sortedList.join(',   ')}
        </div>
    );
}

function App() {
    const [numbers] = useState([10, 20, 30]);
    const [names] = useState(['John', 'Sally', 'Riley', 'Kevin']);
    const [randomChars] = useState(['v', 'f', 'a', 'c', 'q']);

    const total = useMemo(() => numbers.reduce((acc, val) => acc + val, 0), [numbers]);
    const sorter = (a, b) => a.localeCompare(b) * -1;
    const sorterNames = (c) => (a, b) => a.localeCompare(b) * c;

    return (
        <div>
            <div>Total : {total}</div>
            <div>Names &nbsp;&nbsp;&nbsp;{names.join(',   ')}</div>
            <SortedList list={names} sortF={sorterNames(1)} c={1} />
            <SortedList list={names} sortF={sorterNames(-1)} c={-1} />
            <SortedList list={randomChars} sortF={sorter} c={0} />
        </div>
    );
}

export default App;
