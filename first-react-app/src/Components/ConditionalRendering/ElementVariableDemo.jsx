import React, { useState } from "react";

// When to use: To store conditional JSX in a variable before returning it.
function ElementVariableDemo() {
  const [isLoggedIn] = useState(true);
  let message;

  if (isLoggedIn) {
    message = <h3>Welcom Anil Kumar!</h3>;
  } else {
    message = <h3>Please Login to Continue!</h3>;
  }

  return (
    <div>
      <h2> Element Variable Demo </h2>
      {message}
    </div>
  );
}

export default ElementVariableDemo;
