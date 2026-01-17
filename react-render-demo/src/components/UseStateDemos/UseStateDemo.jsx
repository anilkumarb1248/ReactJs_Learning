import React, { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);

  console.log("UseStateDemo Component Render");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
      <button onClick={() => setCount(0)}>Set 0 - Count: {count}</button>
      <button onClick={() => setCount(5)}>Set 5 - Count: {count}</button>
    </div>
  );
}

export default UseStateDemo;
