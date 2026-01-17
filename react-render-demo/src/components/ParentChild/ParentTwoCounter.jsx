import React, { useState } from "react";
import Child from "./Child";

function ParentTwoCounter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  console.log("Parent Component Render");
  return (
    <div>
      <button onClick={() => setCountOne((count) => count + 1)}>
        Count One: {countOne}
      </button>
      <button onClick={() => setCountOne(0)}>Set 0 (CountOne)</button>
      <button onClick={() => setCountOne(5)}>Set 5 (CountOne)</button>
      <hr />
      <button onClick={() => setCountTwo((count) => count + 1)}>
        Count Two: {countTwo}
      </button>
      <button onClick={() => setCountTwo(0)}>Set 0 (CountTwo)</button>
      <button onClick={() => setCountTwo(5)}>Set 5 (CountTwo)</button>
      {/* <Child /> */}
      <Child count={countOne} />
      {/* <Child count={count} /> */}
    </div>
  );
}

export default ParentTwoCounter;
