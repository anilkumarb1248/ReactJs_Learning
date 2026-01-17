import React, { useState } from "react";

function CounterFC() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Functional Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterFC;
