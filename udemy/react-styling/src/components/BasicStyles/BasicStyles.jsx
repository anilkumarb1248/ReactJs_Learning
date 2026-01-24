import React from "react";

// import "./custom.css";
import "./custom1.css";
import "./custom2.css";

function BasicStyles() {
  return (
    <>
      <header id="headerStyle">
        <h2 className="h2Style">Learing React Components Styling</h2>
        <p>Applying Vanilla CSS styles</p>
      </header>

      <ul>
        <li>Java</li>
        <li>Spring</li>
        <li>React</li>
      </ul>

      <h3> h3 content </h3>
      <h4> h4 content </h4>
      <h5> h5 content </h5>
    </>
  );
}

export default BasicStyles;
