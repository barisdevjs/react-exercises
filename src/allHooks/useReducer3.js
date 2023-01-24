import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  CHANGE_COUNT: 'change-count'
}


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.RESET:
      return state = 0;
    case ACTIONS.CHANGE_COUNT:
      return state + action.payload.amount
    default:
      return state
  }
}


function Counter() {
  const [count, dispatch] = useReducer(reducer, 0)

  const random =() =>  Math.floor(Math.random() *5) +1
     
  
  return(
    <>
    <span>{count}</span>
    <button onClick={() => dispatch({type:ACTIONS.INCREMENT})}>
      +
    </button>
    <button onClick={() => dispatch({type:ACTIONS.DECREMENT})}>
      -
    </button>
    <button onClick={() => dispatch({type:ACTIONS.RESET})}>
      ZEROIZING
    </button>
    <button onClick={() => dispatch({type:ACTIONS.CHANGE_COUNT, payload:{amount: random()}})}>
      ADD  RANDOM NUM
    </button>
    </>
  )
}

export default Counter;