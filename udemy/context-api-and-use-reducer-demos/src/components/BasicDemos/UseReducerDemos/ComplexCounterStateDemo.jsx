import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.payload };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - +action.payload };
    case "increment5":
      return { ...state, firstCounter: state.firstCounter + action.payload };
    case "decrement5":
      return { ...state, firstCounter: state.firstCounter - +action.payload };
    case "incrementCount2":
      return { ...state, secondCounter: state.secondCounter + action.payload };
    case "decrementCount2":
      return { ...state, secondCounter: state.secondCounter - +action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ComplexCounterStateDemo() {
  const [count, disapatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Complex State Update Demo</h2>
      <h3> First Counter: {count.firstCounter} </h3>
      <h3> Second Counter: {count.secondCounter} </h3>
      <button onClick={() => disapatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => disapatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => disapatch({ type: "increment5", payload: 5 })}>
        Increment 5
      </button>
      <button onClick={() => disapatch({ type: "decrement5", payload: 5 })}>
        Decrement 5
      </button>

      <div>
        <button
          onClick={() => disapatch({ type: "incrementCount2", payload: 1 })}
        >
          Increment Second Counter
        </button>
        <button
          onClick={() => disapatch({ type: "decrementCount2", payload: 1 })}
        >
          Decrement Second Counter
        </button>
      </div>

      <button onClick={() => disapatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ComplexCounterStateDemo;
