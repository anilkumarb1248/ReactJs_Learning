import React from "react";

function Child({ onBtnClick, onGreet }) {
  const name = "Anil Kumar Bandari";
  return (
    <div>
      <h3> Hello from Child </h3>
      <button onClick={onBtnClick}>Click Child!</button>
      <button onClick={() => onGreet(name)}>Greet Me!</button>
    </div>
  );
}

export default Child;
