import React from "react";

const ForwardRefChildInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <h3> Child Component which has the Input</h3>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardRefChildInput;
