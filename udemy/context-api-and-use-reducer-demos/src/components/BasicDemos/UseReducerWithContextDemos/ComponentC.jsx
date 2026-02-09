import React from "react";
import ComponentE from "./ComponentE";

function ComponentC() {
  return (
    <div>
      <h3>ComponentC</h3>
      <div style={{ marginLeft: "50px" }}>
        <ComponentE />
      </div>
    </div>
  );
}

export default ComponentC;
