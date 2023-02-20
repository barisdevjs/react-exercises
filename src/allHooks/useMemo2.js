import React, { useState, useMemo} from 'react';

function App() {
  const [numbers] = useState([10,20,30]);

  const total = useMemo(() => numbers.reduce((acc, val) => acc + val, 0), [numbers]);

  return (
    <div>
        Total : {total}
    </div>
  )
}

export default App 