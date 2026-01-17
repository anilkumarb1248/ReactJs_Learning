import React from "react";
import Child from "./Child";

function Parent() {
  const showMessageInParent = () => {
    alert("Showing message from Parent");
  };

  const greetInParent = (name) => {
    alert(`Hello ${name}, Good Morning`);
  };
  return (
    <div>
      <h3> Hello from Parent </h3>
      <Child onBtnClick={showMessageInParent} onGreet={greetInParent} />
    </div>
  );
}

export default Parent;
