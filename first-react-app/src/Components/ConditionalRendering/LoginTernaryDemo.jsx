import React, { useState } from "react";
import LoginPage from "./LoginPage";
import LoginWelcomePage from "./LoginWelcomePage";

function LoginTernaryDemo() {
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

  return (
    <div>
      <h2>Login Check with Ternary Operator Demo</h2>
      {isUserLoggedIn ? (
        <div>
          <LoginWelcomePage
            onLogout={handleLogout}
            userName={userName}
          ></LoginWelcomePage>
        </div>
      ) : (
        <LoginPage onLogin={handleLogin}></LoginPage>
      )}
    </div>
  );
}

export default LoginTernaryDemo;
