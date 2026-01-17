import React from "react";

function Greet(props) {
  return (
    <div>
      <p>
        Hello {props.name}, you are : {props.role}
      </p>
      {props.children}
    </div>
  );
}

export default Greet;
