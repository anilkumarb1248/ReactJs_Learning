import React, { use } from "react";
import UserContext from "../UserContext";
import ThemeContext from "../ThemeContext";

function UseHookDemo() {
  let user;
  let theme;
  // We can read context values inside condition using 'use' hook
  if (true) {
    user = use(UserContext);
    theme = use(ThemeContext);
  }

  return (
    <div style={{ color: "blue", marginTop: "45px" }}>
      <hr />
      <h2>Use Hook Demo to Read Context Values</h2>
      <p>
        Reading context values using <strong>use hook</strong>{" "}
      </p>
      <p>
        UserName:
        <strong style={{ color: "red" }}>{use(UserContext)}</strong>, Theme:
        <strong style={{ color: "red" }}>{use(ThemeContext)}</strong>
      </p>
    </div>
  );
}

export default UseHookDemo;
