import React from "react";

function LoginWelcomePage({ onLogout, userName }) {
  return (
    <div>
      <h3>Hello {userName}, Welcome to React Learning </h3>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default LoginWelcomePage;
