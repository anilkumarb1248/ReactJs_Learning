import React from "react";

function Button({ handleBtnClick, children }) {
  console.log("Rendering Buttong for - ", children);
  return (
    <div>
      <button onClick={handleBtnClick}>{children}</button>
    </div>
  );
}
export default React.memo(Button);
// export default Button;
