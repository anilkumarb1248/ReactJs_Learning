import React, { useState } from "react";
import CounterButton from "./CounterButton";

function ParentStateChange() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h2>Parent State Counter change from Child Button Click</h2>
      <h3> Hello From Parent </h3>
      <h4> Count : {count} </h4>
      <CounterButton onUpdateCountBtnClick={updateCount} />
    </div>
  );
}

export default ParentStateChange;
