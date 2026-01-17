import React, { useState } from "react";

// When to use: To display a default or fallback UI if the condition is false.
function ShortCircuitOrDemo() {
  const [userName, setUserName] = useState("Anil");
  return (
    <div>
      <h2>Short-Circuit OR (||) Demo</h2>
      {userName || "Guest"}
    </div>
  );
}

export default ShortCircuitOrDemo;
