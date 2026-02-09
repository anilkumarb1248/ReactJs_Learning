import React, { useReducer } from "react";

const initialState = 0;
const counterReducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MultipleReducersDemo() {
  const [countOne, disapatchOne] = useReducer(counterReducer, initialState);
  const [countTwo, disapatchTwo] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Multiple Reducers Demo</h2>
      <h3> Count One : {countOne} </h3>
      <button onClick={() => disapatchOne("increment")}>Increment</button>
      <button onClick={() => disapatchOne("decrement")}>Decrement</button>
      <button onClick={() => disapatchOne("reset")}>Reset</button>

      <h3> Count Two : {countTwo} </h3>
      <button onClick={() => disapatchTwo("increment")}>Increment</button>
      <button onClick={() => disapatchTwo("decrement")}>Decrement</button>
      <button onClick={() => disapatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default MultipleReducersDemo;
