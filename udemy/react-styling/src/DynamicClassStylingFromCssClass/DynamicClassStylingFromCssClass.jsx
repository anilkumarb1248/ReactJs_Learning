import React, { useState } from "react";
import "./DynamicClass.css";

function DynamicClassStylingFromCssClass() {
  const [inValid, serInValid] = useState(false);

  const handleBtnClick = () => {
    serInValid((preValue) => {
      return !preValue;
    });
  };

  return (
    <div>
      <h2>Dynamic Class styling from CSS class </h2>
      {/* <label className="label">This is my label to display for input</label> */}
      {/* <label className={inValid ? "invalid" : undefined}> */}
      {/* <label className={inValid && "invalid"}> */}
      {/* <label className="label invalid"> */}
      <label className={`label ${inValid ? "invalid" : ""}`}>
        This is my label to display for input
      </label>
      <br />
      <button onClick={handleBtnClick}>{inValid ? "Valid" : "Invalid"} </button>
    </div>
  );
}

export default DynamicClassStylingFromCssClass;
