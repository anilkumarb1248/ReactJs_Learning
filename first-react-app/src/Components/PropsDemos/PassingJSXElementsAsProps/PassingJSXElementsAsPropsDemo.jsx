import React from "react";
import Greet from "../Greet";
import Welcome from "./Welcome";

function PassingJSXElementsAsPropsDemo() {
  return (
    <div>
      <h2>Passing JSX Elements As Props Demo</h2>
      <hr />
      <Greet name="Anil" role="SE">
        <h4> Welcome to the company</h4>
      </Greet>
      <hr />
      <Greet name="Manasvi" role="TL">
        <button>Assign Tasks</button>
      </Greet>
      <hr />
      <Greet name="Hithiksha" role="CEO">
        <Welcome></Welcome>
      </Greet>
      <hr />
      <Greet name="Shreetan" role="Manager"></Greet>
    </div>
  );
}

export default PassingJSXElementsAsPropsDemo;
