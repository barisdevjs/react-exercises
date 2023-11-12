import { useReducer } from 'react';

const formReducer = (state, action) => ({ ...state, ...action });

function UserForm() {
  const [state, dispatch] = useReducer(formReducer, {
    first: 'F',
    last: 'L'
  });

    return (
        <div>
            <h1>User Form</h1>
            <input type="text" value={state.first}
                onChange={(e) => dispatch({ first: e.target.value })} />
            <input type="text" value={state.last}
                onChange={(e) => dispatch({ last: e.target.value })} />
            <div>First Name: {state.first}</div>
            <div>Last Name: {state.last}</div>
        </div>
    )
}

// Action types
const SET_NAME = 'SET_NAME';
const ADD_NAME = 'ADD_NAME';

// Action creators
const setName = (payload) => ({ type: SET_NAME, payload });
const addName = () => ({ type: ADD_NAME });

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };
        case ADD_NAME:
            return { ...state, names: [...state.names, state.name], name: '' };
        default:
            return state;
    }
};

function NameList() {
    const [state, dispatch] = useReducer(reducer, { names: [], name: 'Default State' });

    return (
        <div className="App">
            <h1>Name List</h1>
            <input
                type="text"
                value={state.name}
                onChange={(event) => dispatch(setName(event.target.value))}
            />
            <p>{state.name}</p>
            <button onClick={() => dispatch(addName())}>ADD NAME</button>
            <hr />
            <div>
                {state.names.map((name, index) => (
                    <p key={index}>{name}</p>
                ))}
            </div>
        </div>
    );
}


function App() {
    return (
        <>
            <UserForm />
            <hr></hr>
            <NameList />
        </>
    )
}

export default App