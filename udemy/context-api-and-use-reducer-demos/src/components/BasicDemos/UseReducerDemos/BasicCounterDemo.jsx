import React, { useReducer } from "react";

const initialState = 0;
const counterReducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      currentState;
  }
};

function BasicCounterDemo() {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h3>Basic Counter Demo</h3>
      <h3> Count: {count} </h3>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default BasicCounterDemo;
