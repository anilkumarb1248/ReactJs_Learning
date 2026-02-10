import React from "react";

function Title() {
  console.log("Rendering Title");
  return (
    <div>
      <h2>UseCallback Demo Title</h2>
    </div>
  );
}
export default React.memo(Title);
// export default Title;
