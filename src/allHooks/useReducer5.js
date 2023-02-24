import { useReducer } from 'react';


function UserForm() {
    const [state, dispatch] = useReducer((state, action) =>
        ({ ...state, ...action }),
        {
            first: 'F',
            last: 'L'
        });

    return (
        <div>
            <input type="text" value={state.first}
                onChange={(e) => dispatch({ first: e.target.value })} />
            <input type="text" value={state.last}
                onChange={(e) => dispatch({ last: e.target.value })} />
            <div>First Name: {state.first}</div>
            <div>Last Name: {state.last}</div>
        </div>
    )
}

function NameList() {

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
        { names: [], name: 'Default State' }
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

function App() {
    return (
        <>
            <UserForm />
            <NameList />
        </>
    )
}

export default App