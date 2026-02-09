import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function ComponentA() {
  const { count, updateCounter } = useContext(CounterContext);
  return (
    <div>
      <h3>ComponentA : {count} </h3>
      <span>
        <button onClick={() => updateCounter("increment")}>Increment</button>
        <button onClick={() => updateCounter("decrement")}>Decrement</button>
        <button onClick={() => updateCounter("reset")}>Reset</button>
      </span>
    </div>
  );
}

export default ComponentA;
