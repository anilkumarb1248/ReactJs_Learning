import React from "react";
import FComponentB from "./FComponentB";
import UseHookDemo from "./UseHookDemo";
function FComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <FComponentB />
      <UseHookDemo />
    </div>
  );
}

export default FComponentA;
