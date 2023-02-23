import { useReducer } from 'react';

function App() {

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_NAME':
          return { ...state, name: action.payload };
        case 'ADD_NAME':
          return { ...state, names: [...state.names, state.name], name: '' };
        default: return null;
      }
    },
    { names: [], name: 'XXX' }
  )

  return (
    <div className="App">
      <input type="text" value={state.value}
        onChange={(event) => dispatch({ type: 'SET_NAME', payload: event.target.value })}
      />
      <p>{state.name}</p>
      <button onClick={() => dispatch({ type: 'ADD_NAME' })}>ADD NAME</button>
      <hr />
      <div>
        {state.names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  )
}

export default App