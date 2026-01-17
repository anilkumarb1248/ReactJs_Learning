import React from "react";
import Parent from "./Parent";
import ParentStateChange from "./ParentStateChange";

function PassingFunctionsAsProps() {
  return (
    <div>
      <h2>Passing Functions As Props Demos </h2>
      <Parent />
      <ParentStateChange />
    </div>
  );
}

export default PassingFunctionsAsProps;
