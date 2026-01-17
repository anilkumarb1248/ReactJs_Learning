import React, { useState } from "react";

function SwitchStatementDemo() {
  const [cource, setCource] = useState("React");

  const handleBtnClick = (status) => {
    switch (status) {
      case "react":
        setCource("React");
        break;
      case "java":
        setCource("Java");
        break;
      case "genAI":
        setCource("GenAI");
        break;
      case "spring":
        setCource("Spring");
        break;
      default:
        setCource("React");
    }
  };
  return (
    <div>
      <h2>Switch Statement Demo</h2>
      <h3>Welcome to {cource}, Let's learn</h3>
      <div>
        <button onClick={() => handleBtnClick("react")}>React</button>
        <button onClick={() => handleBtnClick("java")}>Java</button>
        <button onClick={() => handleBtnClick("genAI")}>GenAI</button>
        <button onClick={() => handleBtnClick("spring")}>Spring</button>
      </div>
    </div>
  );
}

export default SwitchStatementDemo;
