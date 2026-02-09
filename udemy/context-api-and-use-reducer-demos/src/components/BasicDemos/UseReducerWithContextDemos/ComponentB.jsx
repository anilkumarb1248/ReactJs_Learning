import React, { Component } from "react";
import ComponentD from "./ComponentD";

function ComponentB() {
  return (
    <div>
      <h3>ComponentB</h3>
      <div style={{ marginLeft: "50px" }}>
        <ComponentD />
      </div>
    </div>
  );
}

export default ComponentB;
