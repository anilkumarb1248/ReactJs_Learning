import React from "react";
import Login from "./Login";
import ElementVariableDemo from "./ElementVariableDemo";
import LoginTernaryDemo from "./LoginTernaryDemo";
import ShortCircuitAndDemo from "./ShortCircuitAndDemo";
import ShortCircuitOrDemo from "./ShortCircuitOrDemo";
import SwitchStatementDemo from "./SwitchStatementDemo";

function ConditionalRenderingDemos() {
  return (
    <div>
      <h2>Conditional Rendering Demos</h2>
      <Login />
      <ElementVariableDemo />
      <LoginTernaryDemo />
      <ShortCircuitAndDemo />
      <ShortCircuitOrDemo />
      <SwitchStatementDemo />
    </div>
  );
}

export default ConditionalRenderingDemos;
