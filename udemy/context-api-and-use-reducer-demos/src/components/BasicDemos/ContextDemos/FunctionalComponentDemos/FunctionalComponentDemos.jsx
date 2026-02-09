import React, { useRef, useState } from "react";
import { UserProvider } from "../UserContext";
import { ThemeProvider } from "../ThemeContext";
import FComponentA from "./FComponentA";

function FunctionalComponentDemos() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const userRef = useRef("");
  const [userTheme, setUserTheme] = useState("");

  const handleButtonClick = () => {
    if (!loggedInUser) {
      if (userRef.current.value.trim() === "") {
        alert("Please enter user name to login!");
      }
      setLoggedInUser(userRef.current.value);
      setUserTheme("Dark");
      userRef.current.value = "";
    } else {
      setLoggedInUser("");
      setUserTheme("Light");
    }
  };

  return (
    <div className="full-screen-border">
      <div style={{ marginLeft: "10px" }}>
        <h2>
          <u>
            Functional Component Demos with "useContext" hook and "use" hook
          </u>
        </h2>
        <p>
          Passing Logged in Username and theme to Component B withiout
          <strong> Prop Drilling </strong>
        </p>
        <span>
          <label id="user">User Name: </label>
          <input type="text" ref={userRef} />
          <button onClick={handleButtonClick}>
            {loggedInUser ? "Logout" : "Login"}
          </button>
          {loggedInUser && (
            <span>
              Welcome <strong style={{ color: "red" }}> {loggedInUser}</strong>
            </span>
          )}
        </span>
        <UserProvider value={loggedInUser ? loggedInUser : "Guest"}>
          <ThemeProvider value={userTheme ? userTheme : "Light"}>
            <FComponentA />
          </ThemeProvider>
        </UserProvider>
      </div>
    </div>
  );
}

export default FunctionalComponentDemos;
