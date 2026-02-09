import React, { useContext } from "react";
import UserContext from "../UserContext";
import ThemeContext from "../ThemeContext";

function FComponentB() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h3>Component B</h3>
      <p>Reading context values using useContext hook </p>
      <p>
        UserName:
        <strong style={{ color: "red" }}>{user}</strong>, Theme:
        <strong style={{ color: "red" }}>{theme}</strong>
      </p>
    </div>
  );
}

export default FComponentB;
