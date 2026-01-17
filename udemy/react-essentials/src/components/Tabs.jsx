import React from "react";

// function Tabs({ children, buttons, buttonsContainer }) {
function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <div>
      {/* <menu>{buttons}</menu> */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </div>
  );
}

export default Tabs;
