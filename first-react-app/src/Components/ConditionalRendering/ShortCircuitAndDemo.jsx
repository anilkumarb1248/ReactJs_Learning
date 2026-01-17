import React, { useState } from "react";

// When to use: If you want to render something only when a condition is true — and
// render nothing otherwise.
// React allows any expression to be used in the JSX code. In JavaScript,
// condition are applied from left to right. If the left most condition is false,
// then the next condition will not be processed. Developer can utilize this feature
// and output the message in the JSX itself.
function ShortCircuitAndDemo() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <div>
      <h2>Short-Circuit AND (&&) Demo</h2>
      {isUserLoggedIn && <h3>Hello Anil, Welcome to React Learning </h3>}
      {/* If it is false, nothing will render. If it is true, then welcome message will be rendered. */}
    </div>
  );
}

export default ShortCircuitAndDemo;
