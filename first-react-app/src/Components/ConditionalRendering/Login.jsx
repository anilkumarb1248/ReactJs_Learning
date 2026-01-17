import React, { useState } from "react";
import LoginPage from "./LoginPage";
import LoginWelcomePage from "./LoginWelcomePage";

function Login() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (user) => {
    setIsUserLoggedIn(true);
    setUserName(user);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setUserName("");
  };

  if (isUserLoggedIn) {
    return (
      <div>
        <LoginWelcomePage
          onLogout={handleLogout}
          userName={userName}
        ></LoginWelcomePage>
      </div>
    );
  } else {
    return <LoginPage onLogin={handleLogin}></LoginPage>;
  }
}

export default Login;
