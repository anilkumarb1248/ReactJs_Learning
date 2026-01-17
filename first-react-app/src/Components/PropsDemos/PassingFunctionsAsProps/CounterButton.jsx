import React from "react";

function CounterButton({ onUpdateCountBtnClick }) {
  return (
    <div>
      <h3>Hello from Counter Button Child </h3>
      <button onClick={onUpdateCountBtnClick}>Update Counter from Child</button>
    </div>
  );
}

export default CounterButton;
