import React from "react";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";
import ComponentE from "./ComponentE";

function ComponentB() {
  return (
    <div>
      <h3>Component B</h3>
      <ComponentC />
      <ComponentD />
      <ComponentE />
    </div>
  );
}

export default ComponentB;
