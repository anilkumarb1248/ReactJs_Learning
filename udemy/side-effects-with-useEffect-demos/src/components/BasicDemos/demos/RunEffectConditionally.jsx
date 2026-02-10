import React, { useEffect, useState } from "react";

function RunEffectConditionally() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Running useEffect in RunEffectConditionally component");
    document.title = `Count: ${count}`;
    return () => {
      console.log("Running code cleanup in RunEffectConditionally component");
      document.title = "Side Effects with useEffect";
    };
  }, [count]);

  return (
    <div>
      <h3>Run Effect Conditionally</h3>
      <p>
        <b>Note: </b> UseEffect should run only on count updates not for name
        updates.
      </p>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Counter
      </button>
      <br />
      <label htmlFor="nameInput">Enter your name: </label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default RunEffectConditionally;
