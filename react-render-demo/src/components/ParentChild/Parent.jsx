import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent Component Render");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
      <button onClick={() => setCount(0)}>Set 0</button>
      <button onClick={() => setCount(5)}>Set 5</button>
      {/* <Child /> */}
      <Child count={count} />
    </div>
  );
}

export default Parent;
