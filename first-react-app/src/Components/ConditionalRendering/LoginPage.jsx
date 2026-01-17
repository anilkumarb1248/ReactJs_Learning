import React, { useState } from "react";

function LoginPage(props) {
  const [userName, setUserName] = useState("");

  const handleButtonClik = () => {
    if (userName) {
      props.onLogin(userName);
    } else {
      alert("Please enter username to Login!");
    }
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <button onClick={handleButtonClik}>Login</button>
    </div>
  );
}

export default LoginPage;
