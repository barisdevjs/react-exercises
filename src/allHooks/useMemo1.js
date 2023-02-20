import React, {useState, useMemo} from 'react'

const App = () => {
  
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
  return slowFunction(number)
  }, [number])
  

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    fontFamily: 'Arial'
  }

  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
    <button onClick={() => setDark(prevDark => !prevDark)}> Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

export default App


function slowFunction(number) {

  console.log('slowFunction is running')
  for (let i = 0; i < 1000000000; i++) {
  }
  return number **2
}