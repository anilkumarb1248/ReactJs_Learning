import React from "react";

function Child() {
  console.log("Child Component Render");
  return (
    <div>
      <h3> Child Component</h3>
    </div>
  );
}

// function Child(prop) {
//   console.log("Child Component Render");
//   return (
//     <div>
//       <h3> Child Component: {prop.count}</h3>
//     </div>
//   );
// }

export default Child;
