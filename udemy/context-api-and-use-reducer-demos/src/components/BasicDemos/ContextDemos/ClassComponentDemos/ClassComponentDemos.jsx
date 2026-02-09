import React, { useRef, useState } from "react";
import ComponentA from "./ComponentA";
import { UserProvider } from "../UserContext";
import { ThemeProvider } from "../ThemeContext";

function ClassComponentDemos() {
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
          <u>Class Component Demos</u>
        </h2>
        <p>
          Passing Logged in Username and theme to Component C & D without
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
            <ComponentA />
          </ThemeProvider>
        </UserProvider>
      </div>
    </div>
  );
}

export default ClassComponentDemos;
